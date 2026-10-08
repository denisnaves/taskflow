# Spec Delta

## ADDED Requirements

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

## MODIFIED Requirements

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
