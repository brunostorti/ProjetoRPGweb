/**
 * Tela principal da história
 * Renderiza a cena atual com texto, escolhas e efeitos
 */
import { useState, useEffect } from 'react';
import { ScenarioId } from '../types/story';
import { getNodeById } from '../story/storyEngine';
import TypewriterText from './TypewriterText';
import ChoiceButton from './ChoiceButton';
import BackgroundScene from './BackgroundScene';
import BackgroundMusic from './BackgroundMusic';

interface StoryScreenProps {
  playerName: string;
  avatar: string;
  profile: string;
  scenario: ScenarioId;
  currentNodeId: string;
  onNodeChange: (nodeId: string) => void;
  onRestart: () => void;
}

export default function StoryScreen({
  playerName,
  avatar,
  profile,
  scenario,
  currentNodeId,
  onNodeChange,
  onRestart,
}: StoryScreenProps) {
  const [textComplete, setTextComplete] = useState(false);
  const [currentNode, setCurrentNode] = useState(getNodeById(currentNodeId));

  // Atualizar nó quando currentNodeId mudar
  useEffect(() => {
    const node = getNodeById(currentNodeId);
    setCurrentNode(node);
    setTextComplete(false);
  }, [currentNodeId]);

  const handleChoiceClick = (nextId: string) => {
    setTextComplete(false);
    onNodeChange(nextId);
  };

  const handleTextComplete = () => {
    setTextComplete(true);
  };

  if (!currentNode) {
    return (
      <div className="story-screen">
        <div className="story-card">
          <p>Erro: Cena não encontrada!</p>
          <button onClick={onRestart}>Reiniciar</button>
        </div>
      </div>
    );
  }

  return (
    <BackgroundScene bgKey={currentNode.bgKey} mood={currentNode.mood}>
      <BackgroundMusic musicKey={currentNode.musicKey} />
      
      <div className="story-screen">
        <div className="story-card">
          {/* Cabeçalho com informações do personagem */}
          <div className="story-header">
            <div className="player-info">
              <span className="player-avatar">{avatar}</span>
              <span className="player-name">{playerName}</span>
              <span className="player-profile">{profile}</span>
            </div>
            <div className="scenario-badge">
              {scenario === 'medieval' && '🏰'}
              {scenario === 'zombie' && '🧟'}
              {scenario === 'cyberpunk' && '🌃'}
            </div>
          </div>

          {/* Texto da cena com efeito máquina de escrever */}
          <div className="story-text">
            <TypewriterText 
              text={currentNode.text} 
              onComplete={handleTextComplete}
            />
          </div>

          {/* Botões de escolha (só aparecem quando o texto terminar) */}
          {textComplete && (
            <div className="story-choices">
              {currentNode.choices.map((choice) => (
                <ChoiceButton
                  key={choice.id}
                  label={choice.label}
                  tag={choice.tag}
                  onClick={() => handleChoiceClick(choice.nextId)}
                />
              ))}
            </div>
          )}

          {/* Botão de reiniciar */}
          <button className="restart-button" onClick={onRestart}>
            Reiniciar
          </button>
        </div>
      </div>
    </BackgroundScene>
  );
}

