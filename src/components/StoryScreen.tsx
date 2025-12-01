/**
 * Tela principal da história
 * Renderiza a cena atual com texto, escolhas e efeitos
 * Suporta geração dinâmica com IA
 */
import { useState, useEffect } from 'react';
import { ScenarioId, StoryNode } from '../types/story';
import { getNodeById, getStartNodeId } from '../story/storyEngine';
import { generateStoryWithAI } from '../services/aiService';
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
  onNodeChange: (nodeId: string, choiceLabel?: string) => void;
  onRestart: () => void;
  useAI?: boolean;
  choiceHistory?: string[];
}

export default function StoryScreen({
  playerName,
  avatar,
  profile,
  scenario,
  currentNodeId,
  onNodeChange,
  onRestart,
  useAI = true,
  choiceHistory = [],
}: StoryScreenProps) {
  const [textComplete, setTextComplete] = useState(false);
  const [currentNode, setCurrentNode] = useState<StoryNode | null>(getNodeById(currentNodeId) || null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentStoryText, setCurrentStoryText] = useState<string>('');

  // Atualizar nó quando currentNodeId mudar
  useEffect(() => {
    const node = getNodeById(currentNodeId);
    
    // Se o nó não existe e está em modo IA, ou se é um nó gerado por IA
    if (!node && (useAI || currentNodeId.startsWith('ai_node_') || currentNodeId === 'ai_generated')) {
      // Não fazer nada aqui, será tratado no handleChoiceClick
      return;
    }
    
    if (node) {
      setCurrentNode(node);
      setCurrentStoryText(node.text);
      setTextComplete(false);
    }
  }, [currentNodeId, useAI]);

  const handleChoiceClick = async (choice: { nextId: string; label: string; tag: string }) => {
    setTextComplete(false);
    setIsGenerating(true);

    // Se nextId é 'ai_generated' ou useAI está ativo, gerar com IA
    if (useAI && (choice.nextId === 'ai_generated' || !getNodeById(choice.nextId))) {
      try {
        const generatedNode = await generateStoryWithAI({
          playerName,
          avatar,
          profile,
          scenario,
          currentStory: currentStoryText,
          playerChoice: choice.label,
          choiceTag: choice.tag as any,
          previousChoices: choiceHistory,
        });

        setCurrentNode(generatedNode);
        setCurrentStoryText(generatedNode.text);
        onNodeChange(generatedNode.id, choice.label);
      } catch (error) {
        console.error('Erro ao gerar história:', error);
        // Fallback: tentar usar nextId original ou voltar ao início
        const fallbackNode = getNodeById(choice.nextId) || getNodeById(getStartNodeId(scenario));
        if (fallbackNode) {
          setCurrentNode(fallbackNode);
          setCurrentStoryText(fallbackNode.text);
          onNodeChange(fallbackNode.id, choice.label);
        }
      } finally {
        setIsGenerating(false);
      }
    } else {
      // Usar nó pré-escrito
      const nextNode = getNodeById(choice.nextId);
      if (nextNode) {
        setCurrentNode(nextNode);
        setCurrentStoryText(nextNode.text);
        onNodeChange(choice.nextId, choice.label);
      }
    }
  };

  const handleTextComplete = () => {
    setTextComplete(true);
  };

  // Mostrar loading enquanto gera com IA
  if (isGenerating) {
    return (
      <BackgroundScene bgKey={currentNode?.bgKey || 'alley-dark'} mood={currentNode?.mood || 'normal'}>
        <div className="story-screen">
          <div className="story-card">
            <div className="loading-container">
              <div className="loading-spinner"></div>
              <p className="loading-text">A IA está criando sua próxima aventura...</p>
              <p className="loading-subtext">Isso pode levar alguns segundos</p>
            </div>
          </div>
        </div>
      </BackgroundScene>
    );
  }

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
              text={currentStoryText || currentNode.text} 
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
                  onClick={() => handleChoiceClick(choice)}
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

