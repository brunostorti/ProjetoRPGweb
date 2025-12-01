/**
 * Tela inicial - criação do personagem
 * Permite escolher nome, avatar, perfil e cenário
 */
import { useState } from 'react';
import { ScenarioId } from '../types/story';

interface IntroScreenProps {
  onStart: (data: {
    name: string;
    avatar: string;
    profile: string;
    scenario: ScenarioId;
  }) => void;
}

const avatars = [
  { emoji: '⚔️', label: 'Guerreiro' },
  { emoji: '🧙', label: 'Mago' },
  { emoji: '🏹', label: 'Ladino' },
];

const profiles = [
  'Herói honrado',
  'Trapaceiro carismático',
  'Sobrevivente frio e calculista',
];

const scenarios: { id: ScenarioId; label: string; emoji: string }[] = [
  { id: 'medieval', label: 'Idade Média', emoji: '🏰' },
  { id: 'zombie', label: 'Apocalipse Zumbi', emoji: '🧟' },
  { id: 'cyberpunk', label: 'Futuro Cyberpunk', emoji: '🌃' },
];

export default function IntroScreen({ onStart }: IntroScreenProps) {
  const [name, setName] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');
  const [selectedProfile, setSelectedProfile] = useState<string>('');
  const [selectedScenario, setSelectedScenario] = useState<ScenarioId | null>(null);

  const canStart = name.trim() !== '' && selectedAvatar !== '' && selectedProfile !== '' && selectedScenario !== null;

  const handleStart = () => {
    if (canStart && selectedScenario) {
      onStart({
        name: name.trim(),
        avatar: selectedAvatar,
        profile: selectedProfile,
        scenario: selectedScenario,
      });
    }
  };

  return (
    <div className="intro-screen">
      <div className="intro-card">
        <h1 className="intro-title">🎲 Crie seu Herói 🎲</h1>
        
        <div className="intro-section">
          <label className="intro-label">Nome do Personagem</label>
          <input
            type="text"
            className="intro-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o nome do seu personagem"
            maxLength={30}
          />
        </div>

        <div className="intro-section">
          <label className="intro-label">Escolha seu Avatar</label>
          <div className="avatar-options">
            {avatars.map((avatar) => (
              <button
                key={avatar.emoji}
                className={`avatar-button ${selectedAvatar === avatar.emoji ? 'selected' : ''}`}
                onClick={() => setSelectedAvatar(avatar.emoji)}
              >
                <span className="avatar-emoji">{avatar.emoji}</span>
                <span className="avatar-label">{avatar.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="intro-section">
          <label className="intro-label">Perfil/Estilo</label>
          <div className="profile-options">
            {profiles.map((profile) => (
              <button
                key={profile}
                className={`profile-button ${selectedProfile === profile ? 'selected' : ''}`}
                onClick={() => setSelectedProfile(profile)}
              >
                {profile}
              </button>
            ))}
          </div>
        </div>

        <div className="intro-section">
          <label className="intro-label">Escolha o Cenário</label>
          <div className="scenario-options">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                className={`scenario-button ${selectedScenario === scenario.id ? 'selected' : ''}`}
                onClick={() => setSelectedScenario(scenario.id)}
              >
                <span className="scenario-emoji">{scenario.emoji}</span>
                <span className="scenario-label">{scenario.label}</span>
              </button>
            ))}
          </div>
        </div>

        <button
          className={`start-button ${canStart ? 'enabled' : 'disabled'}`}
          onClick={handleStart}
          disabled={!canStart}
        >
          Começar Aventura
        </button>
      </div>
    </div>
  );
}

