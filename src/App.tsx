/**
 * Componente principal do aplicativo
 * Gerencia o estado global e o fluxo entre IntroScreen e StoryScreen
 */
import { useState } from 'react';
import { ScenarioId } from './types/story';
import { getStartNodeId } from './story/storyEngine';
import IntroScreen from './components/IntroScreen';
import StoryScreen from './components/StoryScreen';

type GameState = 'intro' | 'story';

interface PlayerData {
  name: string;
  avatar: string;
  profile: string;
  scenario: ScenarioId;
}

function App() {
  const [gameState, setGameState] = useState<GameState>('intro');
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [currentNodeId, setCurrentNodeId] = useState<string | null>(null);
  const [useAI, setUseAI] = useState<boolean>(true); // Modo IA ativado por padrão
  const [choiceHistory, setChoiceHistory] = useState<string[]>([]);

  const handleStart = (data: PlayerData) => {
    setPlayerData(data);
    // Definir a cena inicial baseada no cenário escolhido
    const startNodeId = getStartNodeId(data.scenario);
    setCurrentNodeId(startNodeId);
    setChoiceHistory([]); // Resetar histórico
    setGameState('story');
  };

  const handleRestart = () => {
    setGameState('intro');
    setPlayerData(null);
    setCurrentNodeId(null);
    setChoiceHistory([]);
  };

  const handleNodeChange = (nodeId: string, choiceLabel?: string) => {
    if (choiceLabel) {
      setChoiceHistory(prev => [...prev, choiceLabel]);
    }
    setCurrentNodeId(nodeId);
  };

  return (
    <div className="app">
      {gameState === 'intro' && (
        <IntroScreen onStart={handleStart} />
      )}
      {gameState === 'story' && playerData && currentNodeId && (
        <StoryScreen
          playerName={playerData.name}
          avatar={playerData.avatar}
          profile={playerData.profile}
          scenario={playerData.scenario}
          currentNodeId={currentNodeId}
          onNodeChange={handleNodeChange}
          onRestart={handleRestart}
          useAI={useAI}
          choiceHistory={choiceHistory}
        />
      )}
    </div>
  );
}

export default App;

