# 🎲 RPG Interativo - Aventura de Escolhas com IA

Um site web de RPG interativo baseado em escolhas, desenvolvido em React + TypeScript, com **integração de IA (Hugging Face)** para gerar histórias dinâmicas e infinitas.

## ✨ Funcionalidades

- 🎮 **Criação de Personagem**: Nome, avatar, perfil e cenário
- 🤖 **Geração com IA**: Histórias infinitas geradas dinamicamente pela Hugging Face AI
- 📖 **Modo Híbrido**: Combina cenas pré-escritas com geração dinâmica
- ⌨️ **Efeito Máquina de Escrever**: Texto aparece letra por letra
- 🎨 **Efeitos Visuais**: Fundos dinâmicos, animações e emojis
- 🎵 **Trilha Sonora**: Sistema preparado para música de fundo
- 📱 **Responsivo**: Funciona em desktop e mobile

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- **Opcional**: Conta no Hugging Face (gratuita) para aumentar limites: https://huggingface.co

### 1. Instalação

```bash
# Instalar dependências
npm install
```

### 2. Configurar API Key (Opcional)

A API funciona **sem chave**, mas você pode criar uma gratuita para aumentar os limites:

1. Acesse https://huggingface.co
2. Crie uma conta (gratuita)
3. Vá em **Settings** → **Access Tokens**
4. Crie um novo token (read)
5. Copie o token

**Para desenvolvimento local (opcional):**
```bash
# Criar arquivo .env na raiz do projeto
echo "HUGGINGFACE_API_KEY=sua_chave_aqui" > .env
```

**Para produção (Vercel) - Opcional:**
- Configure a variável de ambiente `HUGGINGFACE_API_KEY` no dashboard do Vercel (opcional, aumenta limites)

### 3. Executar Localmente

```bash
# Desenvolvimento
npm run dev
```

O projeto estará disponível em `http://localhost:5173`

**Nota:** Para testar a API localmente, você precisará usar o Vercel CLI ou configurar um proxy. Em produção no Vercel, a API funciona automaticamente.

### 4. Build para Produção

```bash
npm run build
```

Os arquivos estarão na pasta `dist/`.

## 🌐 Deploy no Vercel (Gratuito)

### Opção 1: Via CLI do Vercel (Recomendado)

```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel

# Seguir as instruções:
# - Link to existing project? No
# - Project name? (deixe o padrão ou escolha um)
# - Directory? ./
# - Override settings? No
```

### Opção 2: Via GitHub

1. Faça push do código para o GitHub
2. Acesse https://vercel.com
3. Conecte seu repositório
4. Configure a variável de ambiente `GROQ_API_KEY`
5. Deploy automático!

### Configurar Variável de Ambiente no Vercel (Opcional)

**Nota:** A API funciona sem chave! Mas se quiser aumentar os limites:

1. No dashboard do Vercel, vá em **Settings** → **Environment Variables**
2. Adicione:
   - **Name**: `HUGGINGFACE_API_KEY`
   - **Value**: Seu token do Hugging Face (opcional)
   - **Environments**: Production, Preview, Development
3. Salve e faça redeploy

## 📁 Estrutura do Projeto

```
src/
├── main.tsx                 # Ponto de entrada
├── App.tsx                   # Componente principal
├── types/
│   └── story.ts             # Tipos e interfaces
├── story/
│   ├── storyData.ts         # Dados das histórias (cenas pré-escritas)
│   └── storyEngine.ts       # Funções auxiliares
├── services/
│   └── aiService.ts          # Integração com API de IA
├── components/
│   ├── IntroScreen.tsx      # Tela de criação de personagem
│   ├── StoryScreen.tsx      # Tela principal da história
│   ├── TypewriterText.tsx   # Efeito máquina de escrever
│   ├── ChoiceButton.tsx     # Botão de escolha
│   ├── BackgroundScene.tsx  # Fundo e efeitos visuais
│   └── BackgroundMusic.tsx  # Trilha sonora
└── styles/
    └── global.css           # Estilos globais

api/
└── generate-story.ts        # API Route do Vercel (Groq AI)
```

## 🎮 Como Funciona a IA

O sistema usa **Hugging Face Inference API** (gratuita) para gerar histórias dinamicamente:

1. **Cenas Iniciais**: Começam com cenas pré-escritas
2. **Geração Dinâmica**: Quando o jogador faz uma escolha, a IA:
   - Recebe o contexto atual
   - Analisa a escolha do jogador
   - Gera uma nova cena personalizada
   - Cria 3 novas escolhas
3. **Histórico**: A IA lembra das escolhas anteriores para manter consistência

### Modelo Usado

- **Meta Llama 3 8B Instruct**: Gratuito, rápido e de alta qualidade
- **Sem API Key Necessária**: Funciona sem cadastro (com limites menores)
- **Com API Key**: Aumenta os limites de requisições

## 🎨 Cenários Disponíveis

- **🏰 Idade Média:** Fantasia medieval com magia, dragões, tavernas e guardas
- **🧟 Apocalipse Zumbi:** Sobrevivência em um mundo pós-apocalíptico
- **🌃 Futuro Cyberpunk:** Neon, corporações, hackers e androides

## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Hugging Face Inference API** (integração de IA - gratuita)
- **Vercel** (deploy e serverless functions)
- **CSS puro** (sem bibliotecas de UI)

## 📝 Expandindo o Jogo

### Adicionar Novas Cenas Pré-escritas

Edite `src/story/storyData.ts` e adicione novos objetos `StoryNode`.

### Ajustar Prompts da IA

Edite `api/generate-story.ts` para modificar como a IA gera as histórias.

### Adicionar Novos Cenários

1. Adicione o cenário em `types/story.ts`
2. Crie cenas iniciais em `storyData.ts`
3. Adicione descrições em `api/generate-story.ts`

## 🔧 Troubleshooting

### Erro: "Modelo está carregando"
- O modelo do Hugging Face pode estar "dormindo" (cold start)
- Aguarde alguns segundos e tente novamente
- A primeira requisição pode demorar mais

### API não funciona localmente
- A API route do Vercel só funciona em produção ou com Vercel CLI
- Use `vercel dev` para testar localmente com a API
- Ou teste apenas o frontend com `npm run dev` (a IA só funcionará em produção)

### Histórias muito lentas
- O Hugging Face pode ter latência na primeira requisição (cold start)
- Requisições subsequentes são mais rápidas
- Considere adicionar cache de respostas

### Limites de requisição
- Sem API key: limites menores (mas ainda generosos)
- Com API key: limites maiores
- Crie uma conta gratuita em https://huggingface.co para aumentar limites

## 📄 Licença

Este projeto é livre para uso e modificação.

## 🙏 Créditos

- **Hugging Face**: https://huggingface.co (IA gratuita e open-source)
- **Vercel**: https://vercel.com (Deploy gratuito)
- **Meta Llama**: Modelo de IA open-source

---

**Divirta-se explorando histórias infinitas geradas por IA! 🎲🤖**
