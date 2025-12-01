/**
 * Tipos e interfaces para o sistema de história do RPG
 */

// Identificador do cenário
export type ScenarioId = "medieval" | "zombie" | "cyberpunk";

// Clima/humor da cena (controla emoji, animações, etc.)
export type Mood = "normal" | "danger" | "rain" | "tension";

// Tag de escolha (tipo de ação)
export type ChoiceTag = "carisma" | "acao" | "combate";

// Interface de uma escolha do jogador
export interface Choice {
  id: string;                      // id único da escolha
  label: string;                   // texto do botão
  tag: ChoiceTag;                  // tipo de escolha
  nextId: string;                  // id da próxima cena
}

// Interface de um nó/cena da história
export interface StoryNode {
  id: string;                      // id único da cena
  scenario: ScenarioId;            // cenário a que pertence
  text: string;                    // texto da cena
  mood: Mood;                      // clima (para emoji/efeitos)
  bgKey: string;                   // chave para o fundo visual
  musicKey?: string;               // chave para trilha sonora (opcional)
  choices: Choice[];               // até 3 escolhas
}

