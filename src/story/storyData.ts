/**
 * Dados das histórias - array de todas as cenas do jogo
 */
import { StoryNode } from '../types/story';

export const storyNodes: StoryNode[] = [
  // ==================== CENÁRIO MEDIEVAL ====================
  
  // Cena inicial medieval
  {
    id: "medieval_start",
    scenario: "medieval",
    text: "Você está sentado em uma taverna escura e barulhenta. O cheiro de cerveja e carne assada preenche o ar. De repente, um velho mancando se aproxima da sua mesa, olhando nervosamente para os lados.\n\nEle coloca um saco de moedas e uma caixa de madeira negra na mesa, deslizando-os em sua direção.\n\n— 'Preciso da sua ajuda,' ele sussurra, a voz trêmula. 'Eles estão me procurando. Guardas reais. Se eles encontrarem isso...' ele aponta para a caixa, 'a magia morre para sempre neste mundo.'\n\nNesse momento, a porta da taverna se abre com força e três guardas reais entram, escaneando o ambiente com olhos duros. O velho fica pálido e agarra seu braço com força excessiva.",
    mood: "tension",
    bgKey: "tavern-warm",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_choice_carisma",
        label: "[Enganar/Carisma] Negociar mais com o velho, fingir calma e tentar puxar conversa para ganhar mais ouro",
        tag: "carisma",
        nextId: "medieval_negociacao_velho"
      },
      {
        id: "medieval_choice_acao",
        label: "[Ação/Fuga] Pegar a caixa discretamente e tentar sair pela porta dos fundos",
        tag: "acao",
        nextId: "medieval_fuga_cozinha"
      },
      {
        id: "medieval_choice_combate",
        label: "[Combate/Surpresa] Se levantar de forma intimidadora, como se esperasse os guardas",
        nextId: "medieval_guardas_taverna",
        tag: "combate"
      }
    ]
  },

  // Cena: Negociação com o velho
  {
    id: "medieval_negociacao_velho",
    scenario: "medieval",
    text: "Você mantém a frieza e sorri para o velho, puxando a conversa como se fossem velhos conhecidos.\n\n— 'Avô, você está bem?' você diz alto o suficiente para os guardas ouvirem. 'Vamos, vamos te ajudar a voltar para casa.'\n\nO velho, percebendo sua estratégia, começa a jogar o jogo. Ele puxa mais um pequeno saco de moedas e desliza para você.\n\n— 'Obrigado, neto querido,' ele responde, forçando um sorriso. 'Vamos embora antes que eu cause mais confusão.'\n\nOs guardas olham para vocês, mas parecem convencidos de que é apenas um velho confuso com seu neto. Vocês conseguem sair da taverna sem serem notados.",
    mood: "normal",
    bgKey: "tavern-warm",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_negociacao_1",
        label: "[Ação] Seguir o velho para descobrir mais sobre o Coração de Dragão",
        tag: "acao",
        nextId: "medieval_seguir_velho"
      },
      {
        id: "medieval_negociacao_2",
        label: "[Carisma] Perguntar ao velho sobre a origem da caixa",
        tag: "carisma",
        nextId: "medieval_perguntar_origem"
      },
      {
        id: "medieval_negociacao_3",
        label: "[Combate] Ficar alerta, preparado para qualquer emboscada",
        tag: "combate",
        nextId: "medieval_emboscada"
      }
    ]
  },

  // Cena: Fuga pela cozinha
  {
    id: "medieval_fuga_cozinha",
    scenario: "medieval",
    text: "Você pega a caixa rapidamente e se levanta, caminhando calmamente em direção à cozinha como se fosse um funcionário.\n\nPassando pela porta, você vê um cozinheiro gordo mexendo em uma panela. Ele olha para você com desconfiança, mas você apenas acena e continua.\n\nVocê encontra uma saída lateral que leva a um beco escuro. Lá fora, a noite está fria e silenciosa. Você conseguiu escapar, mas agora está sozinho com a caixa misteriosa.",
    mood: "normal",
    bgKey: "alley-dark",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_fuga_1",
        label: "[Ação] Abrir a caixa para ver o que há dentro",
        tag: "acao",
        nextId: "medieval_abrir_caixa"
      },
      {
        id: "medieval_fuga_2",
        label: "[Carisma] Procurar o velho para devolver a caixa",
        tag: "carisma",
        nextId: "medieval_procurar_velho"
      },
      {
        id: "medieval_fuga_3",
        label: "[Combate] Ficar alerta, preparado para ser seguido",
        tag: "combate",
        nextId: "medieval_ser_seguido"
      }
    ]
  },

  // Cena: Guardas na taverna (CENA ESPECÍFICA SOLICITADA)
  {
    id: "medieval_guardas_taverna",
    scenario: "medieval",
    text: "Você mantém a frieza. O velho sua frio, gotas escorrendo pelo nariz adunco. Ele olha para os guardas se aproximando, depois para você.\n\nCom a mão trêmula, ele arranca um anel de ouro com um rubi enorme do próprio dedo e o coloca em cima do saco de moedas.\n\n— 'Feito! O anel vale o triplo do ouro,' ele sibila desesperado. 'Quanto à caixa... é um Coração de Dragão. Se eles destruírem isso, a magia morre para sempre neste mundo.'\n\nNesse exato momento, o capitão dos guardas — um homem com uma cicatriz feia no rosto — aponta sua manopla de metal na direção da sua mesa.\n\n— 'Ei! Você aí, o do capuz!' o capitão ruge. 'Levante-se e mostre o rosto! Estamos procurando conspiradores.'\n\nOs três guardas começam a caminhar na direção de vocês, empurrando bêbados e derrubando cadeiras. O velho agarra seu braço com força excessiva, os olhos arregalados de pânico. Eles estão a cinco passos de distância.",
    mood: "danger",
    bgKey: "tavern-night",
    musicKey: "medieval_combat",
    choices: [
      {
        id: "medieval_guardas_carisma",
        label: "[Enganar/Carisma] Levantar rindo alto, dar um tapa forte nas costas do velho e gritar: 'Oficial! Graças a Deus! Podem levar esse meu avô bêbado? O velho está caduco, diz que viu fadas na latrina!'",
        tag: "carisma",
        nextId: "medieval_guardas_enganar"
      },
      {
        id: "medieval_guardas_acao",
        label: "[Ação/Fuga] Chutar a mesa pesada de carvalho na direção das pernas dos guardas para bloqueá-los. Agarrar a caixa e o velho, e correr para a porta da cozinha.",
        tag: "acao",
        nextId: "medieval_guardas_fuga"
      },
      {
        id: "medieval_guardas_combate",
        label: "[Combate/Surpresa] Jogar a caneca de cerveja cheia diretamente na cara do capitão para cegá-lo momentaneamente. Sacar a espada em seguida.",
        tag: "combate",
        nextId: "medieval_guardas_combate_cena"
      }
    ]
  },

  // Continuações da cena dos guardas
  {
    id: "medieval_guardas_enganar",
    scenario: "medieval",
    text: "Você se levanta rindo alto, dando um tapa nas costas do velho que o faz tossir.\n\n— 'Oficial! Graças a Deus!' você grita. 'Podem levar esse meu avô bêbado? O velho está caduco, diz que viu fadas na latrina!'\n\nO capitão olha desconfiado, mas o velho, percebendo a estratégia, começa a balbuciar sobre 'fadas verdes' e 'dragões voadores'. Os guardas trocam olhares e riem.\n\n— 'Vamos, velho, vamos te levar para casa,' diz o capitão, ainda desconfiado mas convencido o suficiente. Eles levam o velho, mas você fica com a caixa e o anel. Você conseguiu enganá-los!",
    mood: "normal",
    bgKey: "tavern-warm",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_enganar_1",
        label: "[Ação] Investigar a caixa em segurança",
        tag: "acao",
        nextId: "medieval_investigar_caixa"
      },
      {
        id: "medieval_enganar_2",
        label: "[Carisma] Procurar o velho mais tarde para entender melhor",
        tag: "carisma",
        nextId: "medieval_procurar_velho"
      },
      {
        id: "medieval_enganar_3",
        label: "[Combate] Preparar-se para possíveis seguidores",
        tag: "combate",
        nextId: "medieval_preparar_defesa"
      }
    ]
  },

  {
    id: "medieval_guardas_fuga",
    scenario: "medieval",
    text: "Você chuta a mesa pesada de carvalho com toda força, fazendo-a deslizar e bater nas pernas dos guardas. Um deles cai, o outro tropeça.\n\nVocê agarra a caixa e o velho pelo braço, arrastando-o em direção à cozinha. O capitão ruge de raiva, mas está momentaneamente bloqueado.\n\nVocês correm pela cozinha, passando por pratos e panelas, e saem por uma porta lateral. O ar frio da noite os recebe. Vocês conseguiram escapar, mas os guardas não vão desistir tão fácil.",
    mood: "danger",
    bgKey: "alley-dark",
    musicKey: "medieval_combat",
    choices: [
      {
        id: "medieval_fuga_guardas_1",
        label: "[Ação] Correr o mais rápido possível para se esconder",
        tag: "acao",
        nextId: "medieval_correr_esconder"
      },
      {
        id: "medieval_fuga_guardas_2",
        label: "[Carisma] Tentar acalmar o velho e planejar a próxima ação",
        tag: "carisma",
        nextId: "medieval_acalmar_velho"
      },
      {
        id: "medieval_fuga_guardas_3",
        label: "[Combate] Preparar uma emboscada para os guardas que seguem",
        tag: "combate",
        nextId: "medieval_emboscada_guardas"
      }
    ]
  },

  {
    id: "medieval_guardas_combate_cena",
    scenario: "medieval",
    text: "Você pega a caneca de cerveja e a arremessa diretamente na cara do capitão. O líquido e a cerâmica o cegam momentaneamente.\n\nEm um movimento fluido, você saca sua espada. O som do metal saindo da bainha ecoa na taverna. Todos os olhos se voltam para você.\n\nOs outros dois guardas desembainham suas espadas também. O velho grita e se esconde debaixo da mesa. A taverna fica em silêncio, exceto pelo som pesado da respiração.\n\nVocê está cercado, mas tem a vantagem da surpresa. O capitão ainda está se recuperando.",
    mood: "danger",
    bgKey: "tavern-night",
    musicKey: "medieval_combat",
    choices: [
      {
        id: "medieval_combate_1",
        label: "[Combate] Atacar os guardas enquanto o capitão está cego",
        tag: "combate",
        nextId: "medieval_atacar_guardas"
      },
      {
        id: "medieval_combate_2",
        label: "[Ação] Usar a confusão para fugir com o velho",
        tag: "acao",
        nextId: "medieval_fuga_combate"
      },
      {
        id: "medieval_combate_3",
        label: "[Carisma] Tentar negociar com os guardas",
        tag: "carisma",
        nextId: "medieval_negociar_guardas"
      }
    ]
  },

  // Cenas de continuação genéricas (para preencher as escolhas)
  {
    id: "medieval_seguir_velho",
    scenario: "medieval",
    text: "Você decide seguir o velho discretamente. Ele caminha rápido pelas ruas escuras, olhando para trás constantemente. Finalmente, ele entra em uma casa pequena e abandonada. Você espera alguns minutos antes de se aproximar...",
    mood: "tension",
    bgKey: "alley-dark",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_seguir_1",
        label: "[Ação] Bater na porta",
        tag: "acao",
        nextId: "medieval_abrir_caixa"
      },
      {
        id: "medieval_seguir_2",
        label: "[Carisma] Observar de longe",
        tag: "carisma",
        nextId: "medieval_abrir_caixa"
      },
      {
        id: "medieval_seguir_3",
        label: "[Combate] Forçar a entrada",
        tag: "combate",
        nextId: "medieval_abrir_caixa"
      }
    ]
  },

  {
    id: "medieval_perguntar_origem",
    scenario: "medieval",
    text: "Você pergunta ao velho sobre a origem da caixa. Ele olha nos seus olhos e sussurra:\n\n— 'Ela veio das ruínas do Templo Antigo. Dizem que contém o último Coração de Dragão. Se os guardas a destruírem, toda a magia deste mundo desaparecerá.'\n\nO velho parece genuinamente assustado. Você percebe que isso é muito maior do que imaginava.",
    mood: "tension",
    bgKey: "tavern-warm",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_origem_1",
        label: "[Ação] Abrir a caixa para ver o Coração",
        tag: "acao",
        nextId: "medieval_abrir_caixa"
      },
      {
        id: "medieval_origem_2",
        label: "[Carisma] Oferecer ajuda ao velho",
        tag: "carisma",
        nextId: "medieval_abrir_caixa"
      },
      {
        id: "medieval_origem_3",
        label: "[Combate] Preparar-se para proteger a caixa",
        tag: "combate",
        nextId: "medieval_abrir_caixa"
      }
    ]
  },

  {
    id: "medieval_emboscada",
    scenario: "medieval",
    text: "Você fica alerta, preparado para qualquer emboscada. Sua intuição estava certa - você ouve passos se aproximando. Alguém está seguindo vocês...",
    mood: "danger",
    bgKey: "alley-dark",
    musicKey: "medieval_combat",
    choices: [
      {
        id: "medieval_emboscada_1",
        label: "[Combate] Virar e atacar",
        tag: "combate",
        nextId: "medieval_abrir_caixa"
      },
      {
        id: "medieval_emboscada_2",
        label: "[Ação] Correr",
        tag: "acao",
        nextId: "medieval_abrir_caixa"
      },
      {
        id: "medieval_emboscada_3",
        label: "[Carisma] Tentar negociar",
        tag: "carisma",
        nextId: "medieval_abrir_caixa"
      }
    ]
  },

  {
    id: "medieval_abrir_caixa",
    scenario: "medieval",
    text: "Você abre a caixa cuidadosamente. Dentro, há um objeto pulsante com uma luz suave e quente - o Coração de Dragão. Ele emana uma energia mágica poderosa. Você sente que segurar isso mudará sua vida para sempre...",
    mood: "tension",
    bgKey: "alley-dark",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_caixa_1",
        label: "[Ação] Pegar o Coração",
        tag: "acao",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_caixa_2",
        label: "[Carisma] Fechar a caixa e procurar o velho",
        tag: "carisma",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_caixa_3",
        label: "[Combate] Preparar-se para defender o Coração",
        tag: "combate",
        nextId: "medieval_fim"
      }
    ]
  },

  {
    id: "medieval_procurar_velho",
    scenario: "medieval",
    text: "Você decide procurar o velho. Após algumas horas de busca, você o encontra em uma casa abandonada. Ele parece aliviado ao ver você e a caixa segura...",
    mood: "normal",
    bgKey: "alley-dark",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_procurar_1",
        label: "[Carisma] Devolver a caixa",
        tag: "carisma",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_procurar_2",
        label: "[Ação] Perguntar mais sobre o Coração",
        tag: "acao",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_procurar_3",
        label: "[Combate] Manter a caixa",
        tag: "combate",
        nextId: "medieval_fim"
      }
    ]
  },

  {
    id: "medieval_ser_seguido",
    scenario: "medieval",
    text: "Você fica alerta e percebe que está sendo seguido. Alguém está nas sombras, observando você...",
    mood: "danger",
    bgKey: "alley-dark",
    musicKey: "medieval_combat",
    choices: [
      {
        id: "medieval_seguido_1",
        label: "[Combate] Enfrentar o seguidor",
        tag: "combate",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_seguido_2",
        label: "[Ação] Tentar perder o seguidor",
        tag: "acao",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_seguido_3",
        label: "[Carisma] Tentar descobrir quem é",
        tag: "carisma",
        nextId: "medieval_fim"
      }
    ]
  },

  {
    id: "medieval_investigar_caixa",
    scenario: "medieval",
    text: "Você investiga a caixa cuidadosamente. Ela é feita de madeira negra antiga, com runas gravadas nas laterais. Você sente uma energia mágica pulsante vindo de dentro...",
    mood: "tension",
    bgKey: "alley-dark",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_investigar_1",
        label: "[Ação] Abrir a caixa",
        tag: "acao",
        nextId: "medieval_abrir_caixa"
      },
      {
        id: "medieval_investigar_2",
        label: "[Carisma] Procurar alguém que entenda de runas",
        tag: "carisma",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_investigar_3",
        label: "[Combate] Manter a caixa fechada e protegida",
        tag: "combate",
        nextId: "medieval_fim"
      }
    ]
  },

  {
    id: "medieval_preparar_defesa",
    scenario: "medieval",
    text: "Você se prepara para uma possível emboscada, encontrando um lugar seguro para se esconder. Sua intuição estava certa - você vê figuras suspeitas nas sombras...",
    mood: "danger",
    bgKey: "alley-dark",
    musicKey: "medieval_combat",
    choices: [
      {
        id: "medieval_defesa_1",
        label: "[Combate] Atacar primeiro",
        tag: "combate",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_defesa_2",
        label: "[Ação] Fugir rapidamente",
        tag: "acao",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_defesa_3",
        label: "[Carisma] Tentar negociar",
        tag: "carisma",
        nextId: "medieval_fim"
      }
    ]
  },

  {
    id: "medieval_correr_esconder",
    scenario: "medieval",
    text: "Vocês correm pelas ruas escuras, encontrando um esconderijo em um estábulo abandonado. Os guardas passam correndo, sem perceber vocês. Vocês estão seguros, por enquanto...",
    mood: "normal",
    bgKey: "alley-dark",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_esconder_1",
        label: "[Ação] Planejar o próximo passo",
        tag: "acao",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_esconder_2",
        label: "[Carisma] Conversar com o velho",
        tag: "carisma",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_esconder_3",
        label: "[Combate] Preparar armadilhas",
        tag: "combate",
        nextId: "medieval_fim"
      }
    ]
  },

  {
    id: "medieval_acalmar_velho",
    scenario: "medieval",
    text: "Você tenta acalmar o velho, que está tremendo de medo. Ele respira fundo e agradece. Juntos, vocês planejam a próxima ação...",
    mood: "normal",
    bgKey: "alley-dark",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_acalmar_1",
        label: "[Carisma] Perguntar sobre o Coração",
        tag: "carisma",
        nextId: "medieval_abrir_caixa"
      },
      {
        id: "medieval_acalmar_2",
        label: "[Ação] Procurar um lugar seguro",
        tag: "acao",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_acalmar_3",
        label: "[Combate] Preparar defesas",
        tag: "combate",
        nextId: "medieval_fim"
      }
    ]
  },

  {
    id: "medieval_emboscada_guardas",
    scenario: "medieval",
    text: "Você prepara uma emboscada para os guardas que seguem. Quando eles passam, você ataca de surpresa, derrotando-os rapidamente. Mas mais guardas podem estar vindo...",
    mood: "danger",
    bgKey: "alley-dark",
    musicKey: "medieval_combat",
    choices: [
      {
        id: "medieval_emboscada_g_1",
        label: "[Combate] Continuar lutando",
        tag: "combate",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_emboscada_g_2",
        label: "[Ação] Fugir rapidamente",
        tag: "acao",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_emboscada_g_3",
        label: "[Carisma] Tentar se esconder",
        tag: "carisma",
        nextId: "medieval_fim"
      }
    ]
  },

  {
    id: "medieval_atacar_guardas",
    scenario: "medieval",
    text: "Você ataca os guardas com fúria, usando a vantagem da surpresa. Sua espada corta o ar, e você consegue derrotar dois deles. O terceiro foge, mas o capitão ainda está se recuperando...",
    mood: "danger",
    bgKey: "tavern-night",
    musicKey: "medieval_combat",
    choices: [
      {
        id: "medieval_atacar_1",
        label: "[Combate] Finalizar o capitão",
        tag: "combate",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_atacar_2",
        label: "[Ação] Fugir com o velho",
        tag: "acao",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_atacar_3",
        label: "[Carisma] Tentar negociar com o capitão",
        tag: "carisma",
        nextId: "medieval_fim"
      }
    ]
  },

  {
    id: "medieval_fuga_combate",
    scenario: "medieval",
    text: "Você usa a confusão para fugir com o velho. Vocês correm pela taverna, passando por clientes assustados, e saem pela porta dos fundos. A noite os recebe, e vocês conseguem escapar...",
    mood: "normal",
    bgKey: "alley-dark",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_fuga_c_1",
        label: "[Ação] Continuar correndo",
        tag: "acao",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_fuga_c_2",
        label: "[Carisma] Parar e conversar com o velho",
        tag: "carisma",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_fuga_c_3",
        label: "[Combate] Preparar defesas",
        tag: "combate",
        nextId: "medieval_fim"
      }
    ]
  },

  {
    id: "medieval_negociar_guardas",
    scenario: "medieval",
    text: "Você tenta negociar com os guardas, mas o capitão está muito irritado. Ele ordena que vocês sejam presos. A situação fica tensa...",
    mood: "danger",
    bgKey: "tavern-night",
    musicKey: "medieval_combat",
    choices: [
      {
        id: "medieval_negociar_g_1",
        label: "[Combate] Lutar contra a prisão",
        tag: "combate",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_negociar_g_2",
        label: "[Ação] Tentar fugir",
        tag: "acao",
        nextId: "medieval_fim"
      },
      {
        id: "medieval_negociar_g_3",
        label: "[Carisma] Tentar convencer novamente",
        tag: "carisma",
        nextId: "medieval_fim"
      }
    ]
  },

  // Cena final genérica (pode ser expandida)
  {
    id: "medieval_fim",
    scenario: "medieval",
    text: "Sua aventura continua... O destino do Coração de Dragão está em suas mãos. O que acontecerá a seguir? A história está apenas começando...",
    mood: "normal",
    bgKey: "tavern-warm",
    musicKey: "medieval_suspense",
    choices: [
      {
        id: "medieval_fim_1",
        label: "[Ação] Continuar a jornada",
        tag: "acao",
        nextId: "medieval_start"
      },
      {
        id: "medieval_fim_2",
        label: "[Carisma] Explorar novas opções",
        tag: "carisma",
        nextId: "medieval_start"
      },
      {
        id: "medieval_fim_3",
        label: "[Combate] Preparar-se para novos desafios",
        tag: "combate",
        nextId: "medieval_start"
      }
    ]
  },

  // ==================== CENÁRIO ZUMBI ====================
  
  {
    id: "zombie_start",
    scenario: "zombie",
    text: "Você está em um supermercado quase saqueado. As luzes piscam intermitentemente, alimentadas por um gerador que parece estar nos últimos suspiros. Prateleiras vazias, vidros quebrados, e o cheiro de podridão no ar.\n\nVocê encontrou uma mochila cheia de suprimentos, uma lanterna nova ainda na embalagem, e um rádio que sussurra sobre uma 'zona segura' a alguns quilômetros daqui.\n\nDe repente, uma voz jovem e trêmula vem de trás de uma prateleira:\n\n— 'Não se mexa!' um garoto de uns 15 anos aparece, apontando um revólver velho para você. 'Deixa a mochila e vai embora. Agora.'\n\nLá fora, você ouve gemidos baixos e arrastar de pés. Os zumbis estão se aproximando. O garoto está assustado, mas determinado. Você precisa decidir rápido.",
    mood: "danger",
    bgKey: "supermarket-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_choice_carisma",
        label: "[Enganar/Carisma] Tentar convencer o garoto a ir junto para a zona segura, dividindo recursos",
        tag: "carisma",
        nextId: "zombie_convencer_garoto"
      },
      {
        id: "zombie_choice_acao",
        label: "[Ação/Fuga] Se jogar atrás de prateleiras e tentar sair por uma saída lateral",
        tag: "acao",
        nextId: "zombie_fuga_lateral"
      },
      {
        id: "zombie_choice_combate",
        label: "[Combate/Surpresa] Tentar desarmar o garoto na marra, correndo o risco de disparo",
        tag: "combate",
        nextId: "zombie_desarmar_garoto"
      }
    ]
  },

  {
    id: "zombie_convencer_garoto",
    scenario: "zombie",
    text: "Você mantém a calma e fala com voz suave:\n\n— 'Olha, garoto. Eu também quero chegar na zona segura. Sozinhos, nenhum de nós vai conseguir. Juntos, temos uma chance. Dividimos os recursos, nos protegemos mutuamente. O que você acha?'\n\nO garoto hesita, a arma tremendo ligeiramente. Os gemidos lá fora ficam mais altos.\n\n— 'Como eu sei que posso confiar em você?' ele pergunta, ainda desconfiado.",
    mood: "tension",
    bgKey: "supermarket-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_convencer_1",
        label: "[Carisma] Mostrar que você também tem medo, criar empatia",
        tag: "carisma",
        nextId: "zombie_aliado_garoto"
      },
      {
        id: "zombie_convencer_2",
        label: "[Ação] Oferecer a lanterna como sinal de boa fé",
        tag: "acao",
        nextId: "zombie_aliado_garoto"
      },
      {
        id: "zombie_convencer_3",
        label: "[Combate] Preparar-se caso ele não aceite",
        tag: "combate",
        nextId: "zombie_aliado_garoto"
      }
    ]
  },

  {
    id: "zombie_fuga_lateral",
    scenario: "zombie",
    text: "Você se joga atrás de uma prateleira de cereais, ouvindo o garoto gritar. Você rasteja pelo chão sujo, passando por produtos derramados.\n\nVocê encontra uma porta de funcionários que leva para um corredor escuro. A lanterna! Você pega ela e acende, iluminando o caminho. O corredor leva para um estacionamento traseiro.\n\nVocê conseguiu escapar, mas deixou a mochila para trás. Pelo menos você tem a lanterna e o rádio. Os gemidos ficam mais distantes.",
    mood: "normal",
    bgKey: "alley-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_fuga_1",
        label: "[Ação] Seguir em direção à zona segura",
        tag: "acao",
        nextId: "zombie_zona_segura"
      },
      {
        id: "zombie_fuga_2",
        label: "[Carisma] Tentar voltar e negociar com o garoto",
        tag: "carisma",
        nextId: "zombie_voltar_garoto"
      },
      {
        id: "zombie_fuga_3",
        label: "[Combate] Procurar uma arma antes de seguir",
        tag: "combate",
        nextId: "zombie_procurar_arma"
      }
    ]
  },

  {
    id: "zombie_desarmar_garoto",
    scenario: "zombie",
    text: "Você se move rápido, pegando o pulso do garoto antes que ele possa reagir. A arma cai no chão com um barulho seco.\n\nO garoto grita e tenta se soltar, mas você o segura firmemente.\n\n— 'Calma! Eu não vou te machucar!' você diz. 'Mas você também não vai me ameaçar.'\n\nOs gemidos lá fora ficam MUITO mais altos. Algo está batendo na porta do supermercado. Vocês dois param e olham na direção do barulho.",
    mood: "danger",
    bgKey: "supermarket-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_desarmar_1",
        label: "[Combate] Pegar a arma e se preparar para lutar",
        tag: "combate",
        nextId: "zombie_lutar_zumbis"
      },
      {
        id: "zombie_desarmar_2",
        label: "[Ação] Fugir com o garoto pela saída lateral",
        tag: "acao",
        nextId: "zombie_fuga_juntos"
      },
      {
        id: "zombie_desarmar_3",
        label: "[Carisma] Devolver a arma e propor uma trégua",
        tag: "carisma",
        nextId: "zombie_tregua"
      }
    ]
  },

  // Continuações do cenário zumbi
  {
    id: "zombie_aliado_garoto",
    scenario: "zombie",
    text: "O garoto finalmente aceita sua proposta. Vocês se tornam aliados, dividindo os recursos e planejando a jornada até a zona segura. Juntos, vocês têm muito mais chances de sobreviver...",
    mood: "normal",
    bgKey: "supermarket-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_aliado_1",
        label: "[Ação] Planejar a rota para a zona segura",
        tag: "acao",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_aliado_2",
        label: "[Carisma] Conversar com o garoto sobre o passado",
        tag: "carisma",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_aliado_3",
        label: "[Combate] Preparar armas e defesas",
        tag: "combate",
        nextId: "zombie_fim"
      }
    ]
  },

  {
    id: "zombie_zona_segura",
    scenario: "zombie",
    text: "Você segue em direção à zona segura, usando o rádio como guia. A jornada é perigosa, mas você consegue chegar. A zona segura é um forte militar improvisado, com pessoas sobreviventes trabalhando juntas...",
    mood: "normal",
    bgKey: "alley-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_zona_1",
        label: "[Carisma] Se apresentar aos líderes",
        tag: "carisma",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_zona_2",
        label: "[Ação] Explorar a zona segura",
        tag: "acao",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_zona_3",
        label: "[Combate] Se oferecer para patrulhas",
        tag: "combate",
        nextId: "zombie_fim"
      }
    ]
  },

  {
    id: "zombie_voltar_garoto",
    scenario: "zombie",
    text: "Você decide voltar e tentar negociar com o garoto. Quando você retorna, ele ainda está lá, mas parece mais calmo. Você oferece uma trégua...",
    mood: "tension",
    bgKey: "supermarket-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_voltar_1",
        label: "[Carisma] Propor uma aliança",
        tag: "carisma",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_voltar_2",
        label: "[Ação] Dividir os recursos",
        tag: "acao",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_voltar_3",
        label: "[Combate] Estar preparado para qualquer coisa",
        tag: "combate",
        nextId: "zombie_fim"
      }
    ]
  },

  {
    id: "zombie_procurar_arma",
    scenario: "zombie",
    text: "Você procura por uma arma no estacionamento. Encontra um pedaço de metal afiado e uma barra de ferro. Não é muito, mas é melhor que nada. Você se prepara para a jornada...",
    mood: "normal",
    bgKey: "alley-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_arma_1",
        label: "[Combate] Testar a arma",
        tag: "combate",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_arma_2",
        label: "[Ação] Seguir para a zona segura",
        tag: "acao",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_arma_3",
        label: "[Carisma] Procurar outros sobreviventes",
        tag: "carisma",
        nextId: "zombie_fim"
      }
    ]
  },

  {
    id: "zombie_lutar_zumbis",
    scenario: "zombie",
    text: "Você pega a arma e se prepara. Os zumbis quebram a porta e entram no supermercado. Você e o garoto lutam juntos, derrotando vários deles. Mas mais estão vindo...",
    mood: "danger",
    bgKey: "supermarket-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_lutar_1",
        label: "[Combate] Continuar lutando",
        tag: "combate",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_lutar_2",
        label: "[Ação] Fugir pela saída lateral",
        tag: "acao",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_lutar_3",
        label: "[Carisma] Tentar se esconder",
        tag: "carisma",
        nextId: "zombie_fim"
      }
    ]
  },

  {
    id: "zombie_fuga_juntos",
    scenario: "zombie",
    text: "Vocês fogem juntos pela saída lateral, deixando os zumbis para trás. O garoto parece grato, mesmo depois do confronto inicial. Vocês se tornam aliados na sobrevivência...",
    mood: "normal",
    bgKey: "alley-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_fuga_j_1",
        label: "[Ação] Planejar a próxima ação",
        tag: "acao",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_fuga_j_2",
        label: "[Carisma] Conversar com o garoto",
        tag: "carisma",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_fuga_j_3",
        label: "[Combate] Preparar defesas",
        tag: "combate",
        nextId: "zombie_fim"
      }
    ]
  },

  {
    id: "zombie_tregua",
    scenario: "zombie",
    text: "Você devolve a arma ao garoto e propõe uma trégua. Ele hesita, mas aceita. Os zumbis estão se aproximando, e vocês precisam trabalhar juntos para sobreviver...",
    mood: "tension",
    bgKey: "supermarket-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_tregua_1",
        label: "[Carisma] Propor uma aliança permanente",
        tag: "carisma",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_tregua_2",
        label: "[Ação] Fugir juntos",
        tag: "acao",
        nextId: "zombie_fim"
      },
      {
        id: "zombie_tregua_3",
        label: "[Combate] Preparar-se para lutar juntos",
        tag: "combate",
        nextId: "zombie_fim"
      }
    ]
  },

  {
    id: "zombie_fim",
    scenario: "zombie",
    text: "Sua jornada no apocalipse zumbi continua... Cada decisão importa. A sobrevivência depende de suas escolhas. A história está apenas começando...",
    mood: "normal",
    bgKey: "supermarket-dark",
    musicKey: "zombie_low_drone",
    choices: [
      {
        id: "zombie_fim_1",
        label: "[Ação] Continuar a jornada",
        tag: "acao",
        nextId: "zombie_start"
      },
      {
        id: "zombie_fim_2",
        label: "[Carisma] Explorar novas opções",
        tag: "carisma",
        nextId: "zombie_start"
      },
      {
        id: "zombie_fim_3",
        label: "[Combate] Preparar-se para novos desafios",
        tag: "combate",
        nextId: "zombie_start"
      }
    ]
  },

  // ==================== CENÁRIO CYBERPUNK ====================
  
  {
    id: "cyberpunk_start",
    scenario: "cyberpunk",
    text: "Você está em um beco estreito, iluminado apenas por neons piscantes e anúncios holográficos que flutuam no ar. A chuva digital cai constantemente, criando poças de luz colorida no chão molhado.\n\nSeu dispositivo neural recebe uma mensagem: um contrato para invadir os servidores da Corporação Helix e roubar o arquivo 'PROJETO DRAGÃO'. O pagamento é generoso, mas os riscos são enormes.\n\nDe repente, uma figura se aproxima das sombras. É um androide sem marca, com olhos que brilham com uma luz azul fria.\n\n— 'Eu tenho a chave de acesso que você precisa,' diz o androide, a voz sintética. 'Mas desconfio de você. Por que a Helix quer esse arquivo?'\n\nNo céu, drones de vigilância passam, suas luzes vermelhas varrendo as ruas. Você precisa decidir rápido.",
    mood: "rain",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_choice_carisma",
        label: "[Enganar/Carisma] Convencer o androide de que você já sabotou a Helix antes",
        tag: "carisma",
        nextId: "cyberpunk_convencer_android"
      },
      {
        id: "cyberpunk_choice_acao",
        label: "[Ação/Fuga] Clonar a chave rapidamente e sumir",
        tag: "acao",
        nextId: "cyberpunk_clonar_chave"
      },
      {
        id: "cyberpunk_choice_combate",
        label: "[Combate/Surpresa] Tentar desativar o androide à força e tomar a chave",
        tag: "combate",
        nextId: "cyberpunk_desativar_android"
      }
    ]
  },

  {
    id: "cyberpunk_convencer_android",
    scenario: "cyberpunk",
    text: "Você mantém a calma e começa a falar:\n\n— 'Eu já invadi os servidores da Helix três vezes. Sei como eles operam. Se você me ajudar, posso garantir que o PROJETO DRAGÃO não caia nas mãos erradas.'\n\nO androide analisa você com seus sensores, os olhos piscando.\n\n— 'Interessante. Meus dados mostram que você realmente tem histórico com a Helix. Mas por que eu deveria confiar em você?'\n\nOs drones passam novamente, mais próximos desta vez.",
    mood: "tension",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_convencer_1",
        label: "[Carisma] Mostrar evidências do seu trabalho anterior",
        tag: "carisma",
        nextId: "cyberpunk_aliado_android"
      },
      {
        id: "cyberpunk_convencer_2",
        label: "[Ação] Oferecer dividir o pagamento",
        tag: "acao",
        nextId: "cyberpunk_aliado_android"
      },
      {
        id: "cyberpunk_convencer_3",
        label: "[Combate] Preparar-se caso o androide não aceite",
        tag: "combate",
        nextId: "cyberpunk_aliado_android"
      }
    ]
  },

  {
    id: "cyberpunk_clonar_chave",
    scenario: "cyberpunk",
    text: "Você ativa seu dispositivo de clonagem neural e, em segundos, copia a chave de acesso do androide sem que ele perceba.\n\nVocê se move rápido, desaparecendo nas sombras antes que o androide possa reagir. Ele grita algo em uma linguagem sintética, mas você já está longe.\n\nVocê tem a chave, mas o androide provavelmente vai te procurar. E os drones estão cada vez mais próximos. Você precisa agir rápido.",
    mood: "rain",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_clonar_1",
        label: "[Ação] Ir direto para a Helix",
        tag: "acao",
        nextId: "cyberpunk_helix"
      },
      {
        id: "cyberpunk_clonar_2",
        label: "[Carisma] Tentar negociar com o androide depois",
        tag: "carisma",
        nextId: "cyberpunk_negociar_depois"
      },
      {
        id: "cyberpunk_clonar_3",
        label: "[Combate] Preparar-se para um confronto",
        tag: "combate",
        nextId: "cyberpunk_confronto"
      }
    ]
  },

  {
    id: "cyberpunk_desativar_android",
    scenario: "cyberpunk",
    text: "Você se move rápido, ativando seu emp de pulso que desativa temporariamente o androide. Ele para, os olhos apagando por um momento.\n\nVocê pega a chave de acesso de suas mãos mecânicas. Mas quando você se vira para ir embora, o androide se reativa, mais rápido do que você esperava.\n\n— 'Erro fatal,' ele diz, a voz agora com raiva. 'Você me subestimou.'\n\nOs drones acima começam a descer. Você está em apuros.",
    mood: "danger",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_desativar_1",
        label: "[Combate] Lutar contra o androide e os drones",
        tag: "combate",
        nextId: "cyberpunk_lutar_drones"
      },
      {
        id: "cyberpunk_desativar_2",
        label: "[Ação] Fugir o mais rápido possível",
        tag: "acao",
        nextId: "cyberpunk_fuga_drones"
      },
      {
        id: "cyberpunk_desativar_3",
        label: "[Carisma] Tentar negociar com o androide",
        tag: "carisma",
        nextId: "cyberpunk_negociar_android"
      }
    ]
  },

  // Continuações do cenário cyberpunk
  {
    id: "cyberpunk_aliado_android",
    scenario: "cyberpunk",
    text: "O androide aceita sua proposta. Vocês se tornam aliados, planejando a invasão juntos. O androide tem informações valiosas sobre os sistemas de segurança da Helix...",
    mood: "normal",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_aliado_1",
        label: "[Ação] Planejar a invasão",
        tag: "acao",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_aliado_2",
        label: "[Carisma] Perguntar mais sobre o PROJETO DRAGÃO",
        tag: "carisma",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_aliado_3",
        label: "[Combate] Preparar armas e ferramentas",
        tag: "combate",
        nextId: "cyberpunk_fim"
      }
    ]
  },

  {
    id: "cyberpunk_helix",
    scenario: "cyberpunk",
    text: "Você vai direto para a sede da Helix, usando a chave clonada. O prédio é uma torre de vidro e aço, iluminada por neons. Você se infiltra pelos sistemas de segurança...",
    mood: "tension",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_helix_1",
        label: "[Ação] Invadir os servidores",
        tag: "acao",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_helix_2",
        label: "[Carisma] Tentar encontrar aliados dentro",
        tag: "carisma",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_helix_3",
        label: "[Combate] Estar preparado para segurança",
        tag: "combate",
        nextId: "cyberpunk_fim"
      }
    ]
  },

  {
    id: "cyberpunk_negociar_depois",
    scenario: "cyberpunk",
    text: "Você decide tentar negociar com o androide depois. Quando você o encontra novamente, ele está furioso, mas você oferece uma proposta: trabalhar juntos e dividir os lucros...",
    mood: "tension",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_negociar_d_1",
        label: "[Carisma] Convencê-lo da proposta",
        tag: "carisma",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_negociar_d_2",
        label: "[Ação] Oferecer informações valiosas",
        tag: "acao",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_negociar_d_3",
        label: "[Combate] Estar preparado para rejeição",
        tag: "combate",
        nextId: "cyberpunk_fim"
      }
    ]
  },

  {
    id: "cyberpunk_confronto",
    scenario: "cyberpunk",
    text: "Você se prepara para um confronto. O androide te encontra e está determinado a recuperar a chave. Mas você está pronto...",
    mood: "danger",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_confronto_1",
        label: "[Combate] Lutar contra o androide",
        tag: "combate",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_confronto_2",
        label: "[Ação] Tentar fugir",
        tag: "acao",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_confronto_3",
        label: "[Carisma] Tentar negociar",
        tag: "carisma",
        nextId: "cyberpunk_fim"
      }
    ]
  },

  {
    id: "cyberpunk_lutar_drones",
    scenario: "cyberpunk",
    text: "Você luta contra o androide e os drones. É uma batalha intensa, com lasers e empulsores. Você consegue derrotar alguns drones, mas mais estão vindo...",
    mood: "danger",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_lutar_1",
        label: "[Combate] Continuar lutando",
        tag: "combate",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_lutar_2",
        label: "[Ação] Fugir enquanto ainda pode",
        tag: "acao",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_lutar_3",
        label: "[Carisma] Tentar hackear os drones",
        tag: "carisma",
        nextId: "cyberpunk_fim"
      }
    ]
  },

  {
    id: "cyberpunk_fuga_drones",
    scenario: "cyberpunk",
    text: "Você foge o mais rápido possível, usando becos e passagens secretas. Os drones te perseguem, mas você consegue perdê-los. Você está seguro, por enquanto...",
    mood: "rain",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_fuga_1",
        label: "[Ação] Continuar a missão",
        tag: "acao",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_fuga_2",
        label: "[Carisma] Procurar aliados",
        tag: "carisma",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_fuga_3",
        label: "[Combate] Preparar contra-ataque",
        tag: "combate",
        nextId: "cyberpunk_fim"
      }
    ]
  },

  {
    id: "cyberpunk_negociar_android",
    scenario: "cyberpunk",
    text: "Você tenta negociar com o androide, mesmo na situação tensa. Você oferece uma parceria real, não apenas a chave. O androide hesita, mas considera...",
    mood: "tension",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_negociar_a_1",
        label: "[Carisma] Convencê-lo da parceria",
        tag: "carisma",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_negociar_a_2",
        label: "[Ação] Oferecer informações valiosas",
        tag: "acao",
        nextId: "cyberpunk_fim"
      },
      {
        id: "cyberpunk_negociar_a_3",
        label: "[Combate] Estar preparado para qualquer resultado",
        tag: "combate",
        nextId: "cyberpunk_fim"
      }
    ]
  },

  {
    id: "cyberpunk_fim",
    scenario: "cyberpunk",
    text: "Sua jornada no mundo cyberpunk continua... O PROJETO DRAGÃO aguarda. Cada decisão importa. A história está apenas começando...",
    mood: "normal",
    bgKey: "neon-alley",
    musicKey: "cyber_synthwave",
    choices: [
      {
        id: "cyberpunk_fim_1",
        label: "[Ação] Continuar a missão",
        tag: "acao",
        nextId: "cyberpunk_start"
      },
      {
        id: "cyberpunk_fim_2",
        label: "[Carisma] Explorar novas opções",
        tag: "carisma",
        nextId: "cyberpunk_start"
      },
      {
        id: "cyberpunk_fim_3",
        label: "[Combate] Preparar-se para novos desafios",
        tag: "combate",
        nextId: "cyberpunk_start"
      }
    ]
  }
];

