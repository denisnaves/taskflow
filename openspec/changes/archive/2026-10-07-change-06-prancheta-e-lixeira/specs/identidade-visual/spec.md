# Spec Delta

## ADDED Requirements

### Requirement: Ilustração de prancheta no estado vazio
Sempre que não houver nenhuma tarefa (tela inicial e tela com o formulário revelado), a aplicação SHALL exibir uma ilustração de prancheta acima da mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar.". Com pelo menos uma tarefa, a ilustração SHALL NOT ser exibida.

#### Scenario: Primeira tela
- **WHEN** não há tarefas e o formulário ainda não foi revelado
- **THEN** a ilustração de prancheta, a mensagem e o botão "+ Nova tarefa" são exibidos

#### Scenario: Segunda tela
- **WHEN** não há tarefas e o usuário clicou em "+ Nova tarefa"
- **THEN** a ilustração de prancheta continua exibida junto com a mensagem, o campo de texto e o botão "+ Adicionar"

#### Scenario: Com tarefas
- **WHEN** existe pelo menos uma tarefa
- **THEN** a ilustração de prancheta não é exibida

### Requirement: Mensagem do estado vazio em duas linhas centralizadas
No estado vazio, a mensagem SHALL ser exibida em duas linhas centralizadas: "Nenhuma tarefa ainda." em negrito e, na linha de baixo, "Adicione sua primeira tarefa para começar.". O botão "+ Nova tarefa" SHALL ficar centralizado.

#### Scenario: Primeira tela
- **WHEN** não há tarefas e o formulário ainda não foi revelado
- **THEN** "Nenhuma tarefa ainda." aparece em negrito, "Adicione sua primeira tarefa para começar." aparece logo abaixo, e o botão "+ Nova tarefa" aparece centralizado

### Requirement: Botão "+ Nova tarefa" maior e com foco
O botão "+ Nova tarefa" SHALL ser exibido cerca de 10% maior que os demais botões de ação e, na primeira tela (sem tarefas e com o formulário oculto), SHALL receber o foco do teclado ao ser exibido, com um contorno de foco visível.

#### Scenario: Primeira tela
- **WHEN** não há tarefas e o formulário ainda não foi revelado
- **THEN** o botão "+ Nova tarefa" aparece com o foco destacado por um contorno visível

### Requirement: Ícone de lixeira
O botão de excluir de cada tarefa SHALL exibir um ícone de lixeira (imagem, não emoji), em cinza, que fica vermelho ao passar o mouse ou receber o foco do teclado, mantendo o nome acessível "Excluir tarefa: <texto>".

#### Scenario: Lixeira na tarefa
- **WHEN** uma tarefa é exibida
- **THEN** o botão de excluir mostra o ícone de lixeira em cinza e, ao passar o mouse ou receber o foco do teclado, em vermelho

## REMOVED Requirements

### Requirement: Sem imagem de prancheta
**Reason**: Substituído pelo pedido de exibir uma ilustração de prancheta quando não há tarefas.
**Migration**: Ver o requisito "Ilustração de prancheta no estado vazio".
