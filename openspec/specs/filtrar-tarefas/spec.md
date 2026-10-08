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
O sistema SHALL exibir na lista somente as tarefas correspondentes ao filtro de status ativo e ao filtro de prioridade ativo, ao mesmo tempo: no status, "Todas" exibe todas as tarefas; "Pendentes" exibe apenas as pendentes; "Concluídas" exibe apenas as concluídas; na prioridade, são exibidas apenas as tarefas cujas prioridades estão marcadas entre "Baixa", "Média" e "Alta" (nenhuma, se todas estiverem desmarcadas). A ordem de criação SHALL ser mantida.

#### Scenario: Filtro Pendentes
- **WHEN** existem tarefas pendentes e concluídas e o usuário seleciona "Pendentes"
- **THEN** somente as tarefas com status "Pendente" são exibidas

#### Scenario: Filtro Concluídas
- **WHEN** existem tarefas pendentes e concluídas e o usuário seleciona "Concluídas"
- **THEN** somente as tarefas com status "Concluída" são exibidas

#### Scenario: Filtro Todas
- **WHEN** o usuário seleciona "Todas" nos filtros de status, com as três prioridades marcadas
- **THEN** todas as tarefas, pendentes e concluídas, são exibidas

#### Scenario: Filtro sem tarefas correspondentes
- **WHEN** a combinação dos filtros ativos não possui nenhuma tarefa correspondente (ex.: "Concluídas" sem nenhuma tarefa concluída, ou somente "Alta" marcada sem tarefas de prioridade Alta)
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

### Requirement: Filtro por prioridade de seleção múltipla
Sempre que existir pelo menos uma tarefa salva, o sistema SHALL exibir, em uma segunda linha logo abaixo dos filtros de status, os filtros de prioridade "Baixa", "Média" e "Alta", sem totalizador. Cada filtro de prioridade SHALL poder ser marcado ou desmarcado individualmente, e os marcados SHALL valer ao mesmo tempo (uma tarefa é exibida se sua prioridade estiver entre as marcadas). Ao carregar a página, as três prioridades SHALL estar marcadas. O usuário SHALL poder desmarcar todas as prioridades; nesse caso nenhuma tarefa é exibida. Os filtros marcados SHALL ser destacados por preenchimento sólido na cor da prioridade (Baixa azul, Média amarela, Alta vermelha), com texto branco, exceto na Média, cujo texto é escuro e os desmarcados SHALL ficar neutros (fundo branco). O filtro de prioridade SHALL ser combinado com o filtro de status e SHALL NOT ser persistido: ao atualizar a página, ou ao excluir a última tarefa, as três voltam a ficar marcadas.

#### Scenario: Filtros de prioridade visíveis com tarefas
- **WHEN** existe pelo menos uma tarefa salva e a página é carregada
- **THEN** a segunda linha de filtros exibe "Baixa", "Média" e "Alta", todas marcadas e sem totalizador

#### Scenario: Filtros de prioridade ocultos sem tarefas
- **WHEN** não há nenhuma tarefa salva
- **THEN** os filtros de prioridade não são exibidos

#### Scenario: Desmarcar uma prioridade
- **WHEN** as três prioridades estão marcadas e o usuário clica em "Média"
- **THEN** "Média" fica neutra e somente as tarefas de prioridade Baixa e Alta são exibidas

#### Scenario: Marcar de novo
- **WHEN** "Média" está desmarcada e o usuário clica nela
- **THEN** "Média" volta a ficar preenchida e suas tarefas voltam a ser exibidas

#### Scenario: Todas as prioridades desmarcadas
- **WHEN** somente "Alta" está marcada e o usuário clica em "Alta"
- **THEN** nenhuma prioridade fica marcada e a lista exibe a mensagem informando que não há tarefas naquele filtro

#### Scenario: Combinar prioridade e status
- **WHEN** somente "Alta" está marcada e o usuário seleciona "Pendentes" nos filtros de status
- **THEN** somente as tarefas de prioridade Alta que estão pendentes são exibidas

#### Scenario: Prioridades voltam a todas marcadas
- **WHEN** apenas "Baixa" está marcada e o usuário atualiza a página
- **THEN** as três prioridades voltam a ficar marcadas
