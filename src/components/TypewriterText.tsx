/**
 * Componente de texto com efeito de máquina de escrever
 * Mostra o texto letra por letra, com opção de pular ao clicar
 */
import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  onComplete?: () => void;
  speed?: number; // velocidade em ms por caractere
}

export default function TypewriterText({ 
  text, 
  onComplete, 
  speed = 30 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [skipRequested, setSkipRequested] = useState(false);

  useEffect(() => {
    // Reset quando o texto mudar
    setDisplayedText('');
    setIsComplete(false);
    setSkipRequested(false);
  }, [text]);

  useEffect(() => {
    if (skipRequested) {
      // Se o usuário pediu para pular, mostrar tudo de uma vez
      setDisplayedText(text);
      setIsComplete(true);
      if (onComplete) {
        setTimeout(onComplete, 100);
      }
      return;
    }

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [displayedText, text, speed, isComplete, onComplete, skipRequested]);

  const handleClick = () => {
    if (!isComplete && !skipRequested) {
      setSkipRequested(true);
    }
  };

  // Preservar quebras de linha
  const formattedText = displayedText.split('\n').map((line, index, array) => (
    <span key={index}>
      {line}
      {index < array.length - 1 && <br />}
    </span>
  ));

  return (
    <div 
      onClick={handleClick}
      style={{ 
        cursor: !isComplete ? 'pointer' : 'default',
        minHeight: '100px'
      }}
      title={!isComplete ? 'Clique para pular' : ''}
    >
      {formattedText}
      {!isComplete && <span className="cursor-blink">|</span>}
    </div>
  );
}

