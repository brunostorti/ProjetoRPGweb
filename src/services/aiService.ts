/**
 * Serviço para integração com API de geração de histórias com IA
 */
import { StoryNode, ChoiceTag } from '../types/story';

interface GenerateStoryParams {
  playerName: string;
  avatar: string;
  profile: string;
  scenario: string;
  currentStory?: string;
  playerChoice: string;
  choiceTag: ChoiceTag;
  previousChoices?: string[];
}

interface GenerateStoryResponse {
  success: boolean;
  node: StoryNode;
  error?: string;
}

/**
 * Gera uma nova cena da história usando IA
 */
export async function generateStoryWithAI(
  params: GenerateStoryParams
): Promise<StoryNode> {
  try {
    // Determinar URL da API (desenvolvimento vs produção)
    // No Vercel, a API fica na mesma origem
    const apiUrl = '/api/generate-story';

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Erro HTTP: ${response.status}`);
    }

    const data: GenerateStoryResponse = await response.json();

    if (!data.success || !data.node) {
      throw new Error(data.error || 'Resposta inválida da API');
    }

    return data.node;
  } catch (error: any) {
    console.error('Erro ao gerar história com IA:', error);
    
    // Retornar nó de fallback em caso de erro
    return createFallbackNode(params);
  }
}

/**
 * Cria um nó de fallback quando a IA falha
 */
function createFallbackNode(params: GenerateStoryParams): StoryNode {
  const { scenario, playerChoice } = params;

  const bgKeys: Record<string, string> = {
    medieval: 'tavern-warm',
    zombie: 'supermarket-dark',
    cyberpunk: 'neon-alley'
  };

  return {
    id: `fallback_${Date.now()}`,
    scenario: scenario as any,
    text: `Você escolheu: "${playerChoice}".\n\nA história continua, mas algo inesperado acontece... O destino ainda está sendo escrito.`,
    mood: 'normal',
    bgKey: bgKeys[scenario] || 'alley-dark',
    musicKey: scenario === 'medieval' ? 'medieval_suspense' : scenario === 'zombie' ? 'zombie_low_drone' : 'cyber_synthwave',
    choices: [
      {
        id: `fallback_choice_1_${Date.now()}`,
        label: '[Enganar/Carisma] Tentar negociar ou convencer',
        tag: 'carisma',
        nextId: 'ai_generated'
      },
      {
        id: `fallback_choice_2_${Date.now()}`,
        label: '[Ação/Fuga] Agir rapidamente ou fugir',
        tag: 'acao',
        nextId: 'ai_generated'
      },
      {
        id: `fallback_choice_3_${Date.now()}`,
        label: '[Combate/Surpresa] Confrontar diretamente',
        tag: 'combate',
        nextId: 'ai_generated'
      }
    ]
  };
}

/**
 * Verifica se a API de IA está disponível
 */
export async function checkAIAvailability(): Promise<boolean> {
  try {
    // Sempre usar a API relativa (funciona em produção)
    const apiUrl = '/api/generate-story';

    // Fazer uma requisição de teste (sem corpo, só para verificar se o endpoint existe)
    const response = await fetch(apiUrl, {
      method: 'OPTIONS',
    });

    return response.status !== 404;
  } catch {
    return false;
  }
}

