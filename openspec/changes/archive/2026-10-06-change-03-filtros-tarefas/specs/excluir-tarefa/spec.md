# Spec Delta

## MODIFIED Requirements

### Requirement: Excluir tarefa pela lixeira
O sistema SHALL exibir um botão de lixeira em cada tarefa listada e, ao ser acionado, SHALL remover imediatamente essa tarefa (pendente ou concluída) da lista exibida e do LocalStorage, sem pedir confirmação. Quando a exclusão deixar a lista sem nenhuma tarefa, o sistema SHALL voltar à tela inicial do estado vazio.

#### Scenario: Excluir uma tarefa
- **WHEN** o usuário clica na lixeira de uma tarefa
- **THEN** a tarefa deixa de aparecer na lista e é removida do LocalStorage, não reaparecendo após recarregar a página

#### Scenario: Excluir não altera as demais tarefas
- **WHEN** existem várias tarefas e o usuário exclui apenas uma delas
- **THEN** as demais tarefas continuam listadas, com o mesmo status e na mesma ordem

#### Scenario: Excluir a última tarefa
- **WHEN** o usuário exclui a única tarefa existente (ou todas, uma a uma)
- **THEN** nenhuma tarefa permanece no LocalStorage e a tela volta ao estado inicial: mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar." e botão "+ Nova tarefa", com o formulário de criação e os filtros ocultos
- **AND** o filtro ativo volta a ser "Todas"

#### Scenario: Criar tarefa após excluir todas
- **WHEN** o usuário, na tela inicial após excluir todas as tarefas, clica em "+ Nova tarefa" e adiciona uma tarefa
- **THEN** a tarefa aparece na lista (filtro "Todas") e os filtros voltam a ser exibidos
