/**
 * Componente de fundo da cena
 * Controla o fundo visual e efeitos baseados em bgKey e mood
 */
import { Mood } from '../types/story';

interface BackgroundSceneProps {
  bgKey: string;
  mood: Mood;
  children: React.ReactNode;
}

export default function BackgroundScene({ bgKey, mood, children }: BackgroundSceneProps) {
  // Classe CSS baseada no bgKey
  const bgClass = `bg-${bgKey.replace(/-/g, '-')}`;
  const moodClass = `mood-${mood}`;

  return (
    <div className={`background-scene ${bgClass} ${moodClass}`}>
      {/* Efeitos visuais baseados no mood */}
      {mood === 'danger' && (
        <div className="effect-fire">
          <span className="emoji-effect">🔥</span>
          <span className="emoji-effect">🔥</span>
          <span className="emoji-effect">🔥</span>
        </div>
      )}
      {mood === 'rain' && (
        <div className="effect-rain">
          <div className="rain-overlay"></div>
          <span className="emoji-effect">🌧️</span>
        </div>
      )}
      {mood === 'tension' && (
        <div className="effect-tension">
          <span className="emoji-effect">⚡</span>
        </div>
      )}
      
      {/* Conteúdo da cena */}
      <div className="scene-content">
        {children}
      </div>
    </div>
  );
}

