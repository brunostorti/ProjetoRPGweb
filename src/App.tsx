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

  const handleStart = (data: PlayerData) => {
    setPlayerData(data);
    // Definir a cena inicial baseada no cenário escolhido
    const startNodeId = getStartNodeId(data.scenario);
    setCurrentNodeId(startNodeId);
    setGameState('story');
  };

  const handleRestart = () => {
    setGameState('intro');
    setPlayerData(null);
    setCurrentNodeId(null);
  };

  const handleNodeChange = (nodeId: string) => {
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
        />
      )}
    </div>
  );
}

export default App;

