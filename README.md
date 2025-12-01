# 🎲 RPG Interativo - Aventura de Escolhas

Um site web de RPG interativo baseado em escolhas, desenvolvido em React + TypeScript.

## 📋 Descrição

Este projeto é um RPG de leitura interativa onde o jogador:
- Cria um personagem (nome, avatar, perfil)
- Escolhe um cenário (Medieval, Apocalipse Zumbi, Cyberpunk)
- Vivencia histórias com efeito de máquina de escrever
- Faz escolhas que alteram o rumo da narrativa

## 🚀 Como Começar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. **Instalar dependências:**
```bash
npm install
```

2. **Iniciar o servidor de desenvolvimento:**
```bash
npm run dev
```

3. **Abrir no navegador:**
   - O Vite geralmente inicia em `http://localhost:5173`
   - Siga a URL exibida no terminal

### Build para Produção

```bash
npm run build
```

Os arquivos estarão na pasta `dist/`.

## 📁 Estrutura do Projeto

```
src/
├── main.tsx                 # Ponto de entrada
├── App.tsx                   # Componente principal
├── types/
│   └── story.ts             # Tipos e interfaces
├── story/
│   ├── storyData.ts         # Dados das histórias (cenas)
│   └── storyEngine.ts       # Funções auxiliares
├── components/
│   ├── IntroScreen.tsx      # Tela de criação de personagem
│   ├── StoryScreen.tsx      # Tela principal da história
│   ├── TypewriterText.tsx   # Efeito máquina de escrever
│   ├── ChoiceButton.tsx     # Botão de escolha
│   ├── BackgroundScene.tsx  # Fundo e efeitos visuais
│   └── BackgroundMusic.tsx  # Trilha sonora
└── styles/
    └── global.css           # Estilos globais
```

## 🎮 Como Jogar

1. **Criar Personagem:**
   - Digite um nome
   - Escolha um avatar (⚔️ Guerreiro, 🧙 Mago, 🏹 Ladino)
   - Selecione um perfil
   - Escolha um cenário

2. **Jogar:**
   - Leia o texto que aparece com efeito de máquina de escrever
   - Clique no texto para pular a animação (opcional)
   - Quando o texto terminar, escolhas aparecerão
   - Clique em uma escolha para continuar a história

3. **Reiniciar:**
   - Use o botão "Reiniciar" para voltar à tela inicial

## 🎨 Cenários Disponíveis

- **🏰 Idade Média:** Fantasia medieval com magia, dragões, tavernas e guardas
- **🧟 Apocalipse Zumbi:** Sobrevivência em um mundo pós-apocalíptico
- **🌃 Futuro Cyberpunk:** Neon, corporações, hackers e androides

## 🎵 Trilha Sonora

O jogo está preparado para tocar músicas de fundo. Para adicionar arquivos de áudio:

1. Crie a pasta `public/audio/`
2. Adicione os arquivos:
   - `medieval_suspense.mp3`
   - `medieval_combat.mp3`
   - `zombie_low_drone.mp3`
   - `cyber_synthwave.mp3`

**Nota:** Os arquivos de áudio não estão incluídos. O jogo funcionará normalmente sem eles, apenas sem música de fundo.

## 🛠️ Tecnologias

- **React 18**
- **TypeScript**
- **Vite** (build tool)
- **CSS puro** (sem bibliotecas de UI)

## 📝 Expandindo o Jogo

Para adicionar novas cenas:

1. Abra `src/story/storyData.ts`
2. Adicione novos objetos `StoryNode` ao array `storyNodes`
3. Certifique-se de que os `nextId` das escolhas apontem para IDs válidos

Exemplo:
```typescript
{
  id: "minha_nova_cena",
  scenario: "medieval",
  text: "Seu texto aqui...",
  mood: "normal",
  bgKey: "tavern-warm",
  musicKey: "medieval_suspense",
  choices: [
    {
      id: "escolha_1",
      label: "Texto da escolha",
      tag: "carisma",
      nextId: "proxima_cena"
    }
  ]
}
```

## 📄 Licença

Este projeto é livre para uso e modificação.

---

**Divirta-se explorando as histórias! 🎲**

