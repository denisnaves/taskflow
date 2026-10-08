# Proposal

## Why

Hoje todas as tarefas têm o mesmo peso. Permitir classificar cada tarefa como Alta, Média ou Baixa ajuda o usuário a enxergar o que é mais importante na lista.

## What Changes

- O formulário de nova tarefa ganha a escolha de prioridade por opções em forma de pílula em lista horizontal, de fundo colorido sólido com texto em negrito (Baixa azul, Média amarela com texto escuro, Alta vermelha; texto branco, exceto na Média); Média vem selecionada ao abrir a página, um clique em outra opção troca a prioridade e a escolha permanece depois de incluir a tarefa (não volta para Média).
- Formulário reorganizado: o campo de texto fica à esquerda (sem rótulo visível, com nome acessível e a dica "Digite uma nova tarefa") e, logo abaixo, a seleção de prioridade introduzida por "Selecione a Prioridade"; os dois ocupam cerca de metade da largura. À direita fica o botão de inclusão, redondo, verde vivo e com o "+" grande (nome acessível "Incluir"), centralizado verticalmente entre o campo e a prioridade. As opções de prioridade viram pílulas de fundo colorido sólido.
- Depois de acionar o botão de inclusão (com ou sem texto) o foco volta para o campo de texto; depois de clicar em uma prioridade com texto já digitado, o foco vai para o botão de inclusão.
- Formulário, filtros e lista ficam cada um dentro de um painel arredondado com o mesmo fundo cinza claro translúcido, indicando seções distintas.
- Cada painel ganha um título sobre a borda superior esquerda: "Incluir" (formulário), "Filtro" (filtros) e "Listagem" (lista).
- Cores: o status "Pendente" (e o filtro "Pendentes") passa a vermelho (a prioridade Alta continua vermelha e a Média amarela, com texto mais escuro).
- A lista ganha um cabeçalho "Prioridade" / "Status" logo abaixo dos filtros, alinhado aos rótulos de cada tarefa (os rótulos passam a ter largura fixa).
- Refino visual: textos com contraste mínimo de 4,5:1 (tons mais escuros nos rótulos claros de prioridade e status, texto branco nos itens de fundo sólido, exceto a prioridade Média, de texto escuro sobre o amarelo); filtro ativo preenchido na sua cor e filtros inativos neutros; engrenagem maior com área de clique; fundo vermelho suave no hover/foco da lixeira.
- Filtro por prioridade em uma segunda linha abaixo dos filtros de status: "Baixa", "Média" e "Alta" podem ser marcadas e desmarcadas (várias ao mesmo tempo, inclusive nenhuma), começam todas marcadas, não têm totalizador e valem junto com o filtro de status.
- O texto do estado vazio passa de "Nenhuma tarefa ainda." para "Nenhuma tarefa criada ainda.".
- Cada tarefa criada guarda sua prioridade, persistida no LocalStorage junto com a tarefa.
- A lista exibe a prioridade de cada tarefa (rótulo "Alta", "Média" ou "Baixa").
- Tarefas já salvas sem prioridade são tratadas como "Média".

Fora do escopo: ordenar por prioridade, persistir os filtros, remover a coluna Status e editar a prioridade de uma tarefa existente.

## Capabilities

### Modified Capabilities
- `criar-tarefa`: seleção da prioridade no formulário e persistência.
- `filtrar-tarefas`: filtro de prioridade de seleção múltipla, combinado ao filtro de status.
- `listar-tarefas`: exibição da prioridade em cada tarefa; novo texto do estado vazio.
- `identidade-visual`: painéis translúcidos, botão "Incluir", contraste, filtros ativo/inativo, engrenagem e lixeira; novo texto do estado vazio.
- `estrutura-visual`, `excluir-tarefa`: botão "Incluir" no formulário e novo texto do estado vazio ("Nenhuma tarefa criada ainda.").

## Impact

- `index.html` (opções de prioridade no formulário), `js/storage.js` (campo `prioridade`, valor padrão ao carregar), `js/ui.js` (ler o seletor e exibir o rótulo) e `css/style.css`.
