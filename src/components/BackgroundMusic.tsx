/**
 * Componente de música de fundo
 * Toca trilha sonora baseada na musicKey da cena
 */
import { useEffect, useRef } from 'react';

interface BackgroundMusicProps {
  musicKey?: string;
}

// Mapa de musicKey para caminhos de áudio
const musicMap: Record<string, string> = {
  'medieval_suspense': '/audio/medieval_suspense.mp3',
  'medieval_combat': '/audio/medieval_combat.mp3',
  'zombie_low_drone': '/audio/zombie_low_drone.mp3',
  'cyber_synthwave': '/audio/cyber_synthwave.mp3',
};

export default function BackgroundMusic({ musicKey }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Limpar áudio anterior
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    // Se não houver musicKey, não tocar nada
    if (!musicKey) {
      return;
    }

    // Buscar o caminho do áudio
    const audioPath = musicMap[musicKey];
    if (!audioPath) {
      console.warn(`Música não encontrada para a chave: ${musicKey}`);
      return;
    }

    // Criar novo elemento de áudio
    const audio = new Audio(audioPath);
    audio.loop = true;
    audio.volume = 0.3; // Volume moderado
    
    // Tentar tocar (pode falhar se o usuário não interagiu ainda)
    audio.play().catch((error) => {
      // Ignorar erros de autoplay (normal em navegadores modernos)
      console.log('Autoplay bloqueado. O usuário precisará interagir primeiro.');
    });

    audioRef.current = audio;

    // Limpar ao desmontar ou mudar música
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [musicKey]);

  // Este componente não renderiza nada visível
  return null;
}

