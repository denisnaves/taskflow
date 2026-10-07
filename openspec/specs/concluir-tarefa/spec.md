# concluir-tarefa Specification

## Purpose
Permite que o usuário marque uma tarefa como concluída (e reabra-a), mantendo o status persistido no LocalStorage.

## Requirements

### Requirement: Marcar tarefa como concluída
O sistema SHALL permitir marcar uma tarefa pendente como concluída por meio de uma caixa de seleção exibida no item da tarefa. A tarefa marcada SHALL passar a exibir o status "Concluída" e SHALL ter o texto visualmente destacado como concluído, e a mudança SHALL ser salva no LocalStorage.

#### Scenario: Concluir uma tarefa pendente
- **WHEN** o usuário marca a caixa de seleção de uma tarefa com status "Pendente"
- **THEN** a tarefa passa a exibir o status "Concluída" e o texto aparece destacado como concluído
- **AND** o novo status é salvo no LocalStorage, permanecendo após recarregar a página

#### Scenario: Reabrir uma tarefa concluída
- **WHEN** o usuário desmarca a caixa de seleção de uma tarefa com status "Concluída"
- **THEN** a tarefa volta a exibir o status "Pendente", sem o destaque de concluída
- **AND** o novo status é salvo no LocalStorage

#### Scenario: Concluir uma tarefa não altera as demais
- **WHEN** existem várias tarefas e o usuário conclui apenas uma delas
- **THEN** somente essa tarefa muda de status; as demais mantêm o status e a ordem anteriores

### Requirement: Tarefas sem status são pendentes
Tarefas salvas no LocalStorage sem informação de status (criadas antes desta funcionalidade) SHALL ser tratadas como pendentes.

#### Scenario: Tarefa antiga sem status
- **WHEN** existe no LocalStorage uma tarefa sem o campo de status e a página é carregada
- **THEN** a tarefa é exibida com o status "Pendente" e a caixa de seleção desmarcada

### Requirement: Foco do teclado após concluir ou reabrir com filtro ativo
Quando concluir ou reabrir uma tarefa a fizer sair da lista visível por causa do filtro ativo ("Pendentes" ou "Concluídas"), o foco do teclado SHALL ir para o botão do filtro ativo, em vez de se perder.

#### Scenario: Concluir com o filtro Pendentes ativo
- **WHEN** o filtro "Pendentes" está ativo e o usuário marca o checkbox de uma tarefa pelo teclado
- **THEN** a tarefa deixa a lista e o foco vai para o botão "Pendentes"

#### Scenario: Concluir com o filtro Todas ativo
- **WHEN** o filtro "Todas" está ativo e o usuário marca o checkbox de uma tarefa
- **THEN** a tarefa continua na lista e o foco permanece no checkbox dessa tarefa
