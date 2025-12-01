/**
 * Componente de botão de escolha
 * Estilizado de acordo com a tag (carisma, acao, combate)
 */
import { ChoiceTag } from '../types/story';

interface ChoiceButtonProps {
  label: string;
  tag: ChoiceTag;
  onClick: () => void;
}

export default function ChoiceButton({ label, tag, onClick }: ChoiceButtonProps) {
  // Classes CSS baseadas na tag
  const getButtonClass = () => {
    switch (tag) {
      case 'carisma':
        return 'choice-button choice-button--carisma';
      case 'acao':
        return 'choice-button choice-button--acao';
      case 'combate':
        return 'choice-button choice-button--combate';
      default:
        return 'choice-button';
    }
  };

  return (
    <button 
      className={getButtonClass()}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

