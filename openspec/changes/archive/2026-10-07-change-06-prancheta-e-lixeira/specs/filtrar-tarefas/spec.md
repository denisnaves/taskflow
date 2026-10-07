# Spec Delta

## ADDED Requirements

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
