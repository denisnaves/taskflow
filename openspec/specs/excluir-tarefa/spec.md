# excluir-tarefa Specification

## Purpose
Permite que o usuário exclua uma tarefa pela lixeira, removendo-a da tela e do LocalStorage.

## Requirements

### Requirement: Excluir tarefa pela lixeira
O sistema SHALL exibir um botão de lixeira em cada tarefa listada e, ao ser acionado, SHALL remover imediatamente essa tarefa (pendente ou concluída) da lista exibida e do LocalStorage, sem pedir confirmação.

#### Scenario: Excluir uma tarefa
- **WHEN** o usuário clica na lixeira de uma tarefa
- **THEN** a tarefa deixa de aparecer na lista e é removida do LocalStorage, não reaparecendo após recarregar a página

#### Scenario: Excluir não altera as demais tarefas
- **WHEN** existem várias tarefas e o usuário exclui apenas uma delas
- **THEN** as demais tarefas continuam listadas, com o mesmo status e na mesma ordem

#### Scenario: Excluir a última tarefa
- **WHEN** o usuário exclui a única tarefa existente
- **THEN** a listagem exibe a mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar." e nenhuma tarefa permanece no LocalStorage
- **AND** o botão "+ Nova tarefa" não é exibido enquanto o formulário de criação estiver visível
