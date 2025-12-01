/**
 * Tela de loading com animações e mensagens dinâmicas
 * Melhora a experiência durante a geração da IA
 */
import { useState, useEffect } from 'react';
import { ScenarioId } from '../types/story';
import BackgroundScene from './BackgroundScene';

interface LoadingScreenProps {
  bgKey: string;
  mood: string;
  scenario: ScenarioId;
}

// Mensagens de loading por cenário
const loadingMessages: Record<ScenarioId, string[]> = {
  medieval: [
    'Os guardas se aproximam...',
    'A taverna fica em silêncio...',
    'O velho sussurra algo...',
    'A magia começa a pulsar...',
    'O destino se revela...'
  ],
  zombie: [
    'Os gemidos se aproximam...',
    'A lanterna pisca...',
    'Algo se move nas sombras...',
    'O rádio sussurra...',
    'A sobrevivência continua...'
  ],
  cyberpunk: [
    'Os neons piscam...',
    'Dados sendo processados...',
    'A rede está ativa...',
    'Hackers se movem...',
    'O futuro se desenha...'
  ]
};

// Emojis animados por cenário
const scenarioEmojis: Record<ScenarioId, string[]> = {
  medieval: ['⚔️', '🛡️', '🏰', '🐉', '✨'],
  zombie: ['🧟', '🔦', '🏃', '💀', '🌙'],
  cyberpunk: ['🤖', '💻', '🌃', '⚡', '🔮']
};

export default function LoadingScreen({ bgKey, mood, scenario }: LoadingScreenProps) {
  const [messageIndex, setMessageIndex] = useState(0);
  const [emojiIndex, setEmojiIndex] = useState(0);

  // Rotacionar mensagens a cada 2 segundos
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages[scenario].length);
    }, 2000);

    return () => clearInterval(messageInterval);
  }, [scenario]);

  // Rotacionar emojis a cada 0.5 segundos
  useEffect(() => {
    const emojiInterval = setInterval(() => {
      setEmojiIndex((prev) => (prev + 1) % scenarioEmojis[scenario].length);
    }, 500);

    return () => clearInterval(emojiInterval);
  }, [scenario]);

  return (
    <BackgroundScene bgKey={bgKey} mood={mood}>
      <div className="story-screen">
        <div className="story-card">
          <div className="loading-container">
            {/* Spinner principal */}
            <div className="loading-spinner-large">
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
              <div className="spinner-ring"></div>
            </div>

            {/* Emoji animado */}
            <div className="loading-emoji">
              {scenarioEmojis[scenario][emojiIndex]}
            </div>

            {/* Mensagem dinâmica */}
            <p className="loading-text">
              {loadingMessages[scenario][messageIndex]}
            </p>

            {/* Barra de progresso animada */}
            <div className="loading-progress">
              <div className="loading-progress-bar"></div>
            </div>

            {/* Texto secundário */}
            <p className="loading-subtext">
              A IA está criando sua aventura...
            </p>
          </div>
        </div>
      </div>
    </BackgroundScene>
  );
}

