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
