/**
 * API Route do Vercel para gerar histórias com Hugging Face AI
 * Endpoint: /api/generate-story
 * Usa Hugging Face Inference API (gratuita)
 */

// Tipos para Vercel
interface VercelRequest {
  method?: string;
  body?: any;
}

interface VercelResponse {
  status: (code: number) => VercelResponse;
  json: (data: any) => void;
}

// Mapeamento de cenários
const scenarioDescriptions: Record<string, string> = {
  medieval: 'fantasia medieval com magia, dragões, tavernas, guardas reais, espadas e feitiços',
  zombie: 'apocalipse zumbi pós-apocalíptico, sobrevivência, recursos escassos, zumbis e humanos desesperados',
  cyberpunk: 'futuro distópico cyberpunk com neon, corporações poderosas, hackers, androides, drones e tecnologia avançada'
};

const tagDescriptions: Record<string, string> = {
  carisma: 'usando persuasão, engano, charme ou negociação',
  acao: 'usando ação rápida, fuga, agilidade ou movimento',
  combate: 'usando força, combate, surpresa ou confronto direto'
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      playerName,
      avatar,
      profile,
      scenario,
      currentStory,
      playerChoice,
      choiceTag,
      previousChoices = []
    } = req.body;

    if (!scenario || !playerChoice || !choiceTag) {
      return res.status(400).json({ 
        error: 'Missing required fields: scenario, playerChoice, choiceTag' 
      });
    }

    const contextHistory = previousChoices.length > 0
      ? `\n\nHistórico de escolhas anteriores:\n${previousChoices.slice(-3).map((c: string, i: number) => `${i + 1}. ${c}`).join('\n')}`
      : '';

    // Construir prompt
    const prompt = `Você é um narrador experiente de RPG interativo. Continue a história baseado nas informações abaixo.

PERSONAGEM:
- Nome: ${playerName}
- Avatar: ${avatar}
- Perfil: ${profile}

CENÁRIO: ${scenarioDescriptions[scenario] || scenario}

CONTEXTO ATUAL:
${currentStory || 'O jogador está começando sua aventura.'}
${contextHistory}

ESCOLHA DO JOGADOR:
O jogador escolheu: "${playerChoice}"
Tipo de ação: ${tagDescriptions[choiceTag] || choiceTag}

INSTRUÇÕES:
1. Gere uma cena narrativa envolvente (2-4 parágrafos) que continua a partir da escolha do jogador
2. Mantenha o tom e estilo do cenário escolhido
3. A cena deve ser imersiva, com descrições vívidas
4. No final, apresente EXATAMENTE 3 novas escolhas para o jogador
5. Cada escolha deve ter um tipo: [Enganar/Carisma], [Ação/Fuga], ou [Combate/Surpresa]
6. Use quebras de linha (\\n) para separar parágrafos
7. Seja criativo mas mantenha consistência com o cenário

FORMATO DE RESPOSTA (JSON):
{
  "text": "Texto da cena narrativa aqui...",
  "mood": "normal",
  "bgKey": "chave-do-fundo-visual",
  "choices": [
    {
      "label": "[Enganar/Carisma] Texto da escolha 1",
      "tag": "carisma"
    },
    {
      "label": "[Ação/Fuga] Texto da escolha 2",
      "tag": "acao"
    },
    {
      "label": "[Combate/Surpresa] Texto da escolha 3",
      "tag": "combate"
    }
  ]
}

IMPORTANTE: Retorne APENAS o JSON válido, sem markdown ou texto adicional.`;

    // Usar Hugging Face Inference API (gratuita, sem necessidade de API key para modelos públicos)
    // Modelo: meta-llama/Meta-Llama-3-8B-Instruct (gratuito e rápido)
    const model = "meta-llama/Meta-Llama-3-8B-Instruct";
    
    // Se você tiver uma API key do Hugging Face (opcional, mas aumenta limites)
    const hfToken = process.env.HUGGINGFACE_API_KEY || null;
    
    const response = await fetch(
      `https://api-inference.huggingface.co/models/${model}`,
      {
        headers: {
          'Content-Type': 'application/json',
          ...(hfToken && { 'Authorization': `Bearer ${hfToken}` })
        },
        method: 'POST',
        body: JSON.stringify({
          inputs: prompt,
          parameters: {
            max_new_tokens: 800,
            temperature: 0.8,
            return_full_text: false,
            do_sample: true
          }
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Erro Hugging Face:', errorText);
      
      // Se o modelo estiver carregando, retornar fallback
      if (response.status === 503) {
        return res.status(503).json({
          error: 'Modelo está carregando. Tente novamente em alguns segundos.',
          fallback: true
        });
      }
      
      throw new Error(`Hugging Face API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Extrair texto gerado
    let generatedText = '';
    if (Array.isArray(data) && data[0]?.generated_text) {
      generatedText = data[0].generated_text;
    } else if (typeof data === 'string') {
      generatedText = data;
    } else if (data[0]?.generated_text) {
      generatedText = data[0].generated_text;
    }

    // Tentar extrair JSON da resposta
    let storyData;
    try {
      // Procurar por JSON na resposta
      const jsonMatch = generatedText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        storyData = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('JSON não encontrado na resposta');
      }
    } catch (parseError) {
      console.error('Erro ao parsear JSON:', parseError);
      console.error('Resposta recebida:', generatedText);
      
      // Fallback: criar resposta básica
      storyData = {
        text: generatedText || 'A história continua...',
        mood: 'normal',
        bgKey: scenario === 'medieval' ? 'tavern-warm' : scenario === 'zombie' ? 'supermarket-dark' : 'neon-alley',
        choices: [
          {
            label: '[Enganar/Carisma] Tentar negociar',
            tag: 'carisma'
          },
          {
            label: '[Ação/Fuga] Agir rapidamente',
            tag: 'acao'
          },
          {
            label: '[Combate/Surpresa] Confrontar diretamente',
            tag: 'combate'
          }
        ]
      };
    }

    // Validar estrutura
    if (!storyData.text || !storyData.choices || !Array.isArray(storyData.choices)) {
      throw new Error('Resposta da IA não tem formato válido');
    }

    // Garantir 3 escolhas
    while (storyData.choices.length < 3) {
      storyData.choices.push({
        label: `[Ação] Continuar a jornada`,
        tag: 'acao'
      });
    }
    storyData.choices = storyData.choices.slice(0, 3);

    // Adicionar IDs
    storyData.choices = storyData.choices.map((choice: any, index: number) => ({
      ...choice,
      id: `ai_choice_${Date.now()}_${index}`,
      nextId: 'ai_generated'
    }));

    return res.status(200).json({
      success: true,
      node: {
        id: `ai_node_${Date.now()}`,
        scenario,
        text: storyData.text,
        mood: storyData.mood || 'normal',
        bgKey: storyData.bgKey || (scenario === 'medieval' ? 'tavern-warm' : scenario === 'zombie' ? 'supermarket-dark' : 'neon-alley'),
        musicKey: scenario === 'medieval' ? 'medieval_suspense' : scenario === 'zombie' ? 'zombie_low_drone' : 'cyber_synthwave',
        choices: storyData.choices
      }
    });

  } catch (error: any) {
    console.error('Erro ao gerar história:', error);
    
    return res.status(500).json({
      error: 'Erro ao gerar história com IA',
      message: error.message,
      details: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
