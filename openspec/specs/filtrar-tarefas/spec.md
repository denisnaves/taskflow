# filtrar-tarefas Specification

## Purpose
Permite ao usuário filtrar a lista de tarefas entre Todas, Pendentes e Concluídas, exibindo apenas o tipo de tarefa selecionado.

## Requirements

### Requirement: Filtros Todas, Pendentes e Concluídas
O sistema SHALL exibir, acima da lista, os filtros "Todas", "Pendentes" e "Concluídas" sempre que existir pelo menos uma tarefa salva. O filtro ativo SHALL ser destacado visualmente, e ao carregar a página o filtro ativo SHALL ser "Todas".

#### Scenario: Filtros visíveis com tarefas
- **WHEN** existe pelo menos uma tarefa salva e a página é carregada
- **THEN** os filtros "Todas", "Pendentes" e "Concluídas" são exibidos, com "Todas" ativo

#### Scenario: Filtros ocultos sem tarefas
- **WHEN** não há nenhuma tarefa salva
- **THEN** os filtros não são exibidos e o estado vazio da capability `estrutura-visual` é mantido

### Requirement: Cada filtro exibe apenas seu tipo de tarefa
O sistema SHALL exibir na lista somente as tarefas correspondentes ao filtro ativo: "Todas" exibe todas as tarefas; "Pendentes" exibe apenas as pendentes; "Concluídas" exibe apenas as concluídas. A ordem de criação SHALL ser mantida.

#### Scenario: Filtro Pendentes
- **WHEN** existem tarefas pendentes e concluídas e o usuário seleciona "Pendentes"
- **THEN** somente as tarefas com status "Pendente" são exibidas

#### Scenario: Filtro Concluídas
- **WHEN** existem tarefas pendentes e concluídas e o usuário seleciona "Concluídas"
- **THEN** somente as tarefas com status "Concluída" são exibidas

#### Scenario: Filtro Todas
- **WHEN** o usuário seleciona "Todas"
- **THEN** todas as tarefas, pendentes e concluídas, são exibidas

#### Scenario: Filtro sem tarefas correspondentes
- **WHEN** o filtro ativo não possui nenhuma tarefa correspondente (ex.: "Concluídas" sem nenhuma tarefa concluída)
- **THEN** a lista exibe uma mensagem informando que não há tarefas naquele filtro

### Requirement: Concluir tarefa reflete nos filtros
Ao marcar o checkbox de uma tarefa pendente, ela SHALL passar a ser Concluída: continua aparecendo em "Todas", passa a aparecer em "Concluídas" e deixa de aparecer em "Pendentes". Ao desmarcar, o inverso.

#### Scenario: Concluir "Estudar claude-code"
- **WHEN** a tarefa "Estudar claude-code" está Pendente e o usuário marca seu checkbox
- **THEN** ela passa a exibir "Concluída", continua em "Todas" e aparece em "Concluídas"
- **AND** ela não aparece mais em "Pendentes"

#### Scenario: Concluir com o filtro Pendentes ativo
- **WHEN** o filtro "Pendentes" está ativo e o usuário marca o checkbox de uma tarefa
- **THEN** a tarefa deixa de ser exibida na lista, mantendo o filtro "Pendentes" ativo

### Requirement: Tarefas persistem após atualizar a página
As tarefas e seus status SHALL permanecer disponíveis no LocalStorage após atualizar a página, e SHALL aparecer nos filtros correspondentes. Ao atualizar, o filtro ativo SHALL voltar a ser "Todas".

#### Scenario: Atualizar a página com tarefas pendentes e concluídas
- **WHEN** existem tarefas pendentes e concluídas e o usuário atualiza a página
- **THEN** todas as tarefas continuam disponíveis em "Todas", cada uma com seu status, e as concluídas aparecem em "Concluídas"

### Requirement: Totalizador em cada filtro
Cada filtro SHALL exibir, junto ao seu nome, o total de tarefas que ele contém, no formato "Nome (N)": "Todas" conta todas as tarefas, "Pendentes" conta apenas as pendentes e "Concluídas" conta apenas as concluídas. Os totais SHALL ser atualizados ao criar, concluir, reabrir ou excluir tarefas e SHALL independer do filtro ativo.

#### Scenario: Totais corretos
- **WHEN** existem 3 tarefas, sendo 2 pendentes e 1 concluída
- **THEN** os filtros exibem "Todas (3)", "Pendentes (2)" e "Concluídas (1)"

#### Scenario: Totais atualizados ao concluir
- **WHEN** o usuário marca como concluída uma tarefa pendente
- **THEN** o total de "Pendentes" diminui em 1, o de "Concluídas" aumenta em 1 e o de "Todas" não muda

#### Scenario: Totais com outro filtro ativo
- **WHEN** o filtro "Concluídas" está ativo
- **THEN** os totais de "Todas", "Pendentes" e "Concluídas" continuam refletindo todas as tarefas salvas
