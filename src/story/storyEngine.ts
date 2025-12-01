/**
 * Engine de história - funções auxiliares para gerenciar as cenas
 */
import { StoryNode } from '../types/story';
import { storyNodes } from './storyData';

/**
 * Busca um nó da história pelo seu ID
 * @param id - ID único da cena
 * @returns A cena correspondente ou undefined se não encontrada
 */
export function getNodeById(id: string): StoryNode | undefined {
  return storyNodes.find(node => node.id === id);
}

/**
 * Obtém o ID da cena inicial de um cenário
 * @param scenario - ID do cenário
 * @returns ID da cena inicial
 */
export function getStartNodeId(scenario: string): string {
  return `${scenario}_start`;
}

