# Spec Delta

## ADDED Requirements

### Requirement: Foco do teclado após concluir ou reabrir com filtro ativo
Quando concluir ou reabrir uma tarefa a fizer sair da lista visível por causa do filtro ativo ("Pendentes" ou "Concluídas"), o foco do teclado SHALL ir para o botão do filtro ativo, em vez de se perder.

#### Scenario: Concluir com o filtro Pendentes ativo
- **WHEN** o filtro "Pendentes" está ativo e o usuário marca o checkbox de uma tarefa pelo teclado
- **THEN** a tarefa deixa a lista e o foco vai para o botão "Pendentes"

#### Scenario: Concluir com o filtro Todas ativo
- **WHEN** o filtro "Todas" está ativo e o usuário marca o checkbox de uma tarefa
- **THEN** a tarefa continua na lista e o foco permanece no checkbox dessa tarefa
