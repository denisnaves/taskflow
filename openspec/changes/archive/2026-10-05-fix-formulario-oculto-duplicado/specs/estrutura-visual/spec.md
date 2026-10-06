# Spec Delta

## MODIFIED Requirements

### Requirement: Estado vazio da listagem
Quando não há nenhuma tarefa salva **e** o formulário de criação ainda não foi revelado, a área de listagem SHALL exibir a mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar." e um botão "+ Nova tarefa". A mensagem continua sendo exibida mesmo depois de o formulário ser revelado (enquanto não houver tarefas), mas o botão "+ Nova tarefa" SHALL NOT ser exibido junto com o formulário de criação — a tela nunca exibe, ao mesmo tempo, dois controles com a finalidade de criar uma tarefa.

#### Scenario: Tela inicial sem tarefas
- **WHEN** o usuário abre a aplicação e não há tarefas salvas no LocalStorage
- **THEN** a área de listagem exibe a mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar." e o botão "+ Nova tarefa", e o formulário de criação (campo + "+ Adicionar") não é exibido

### Requirement: Revelar formulário de criação
Ao clicar no botão "+ Nova tarefa", o sistema SHALL exibir o formulário de criação de tarefa (campo de texto + botão "+ Adicionar") e SHALL ocultar o botão "+ Nova tarefa" nesse momento. O formulário também SHALL ser exibido automaticamente, sem exigir esse clique, sempre que já existir ao menos uma tarefa salva (inclusive após recarregar a página) — ele só começa oculto no estado vazio.

#### Scenario: Usuário clica em "+ Nova tarefa"
- **WHEN** o usuário clica no botão "+ Nova tarefa", a partir do estado vazio
- **THEN** o campo de texto e o botão "+ Adicionar" passam a ser exibidos na tela
- **AND** o botão "+ Nova tarefa" deixa de ser exibido (a mensagem de estado vazio permanece, até a primeira tarefa ser criada)

#### Scenario: Página recarregada com tarefas existentes
- **WHEN** o usuário recarrega a página e já existe ao menos uma tarefa salva no LocalStorage
- **THEN** o formulário (campo de texto + botão "+ Adicionar") já é exibido, sem necessidade de clicar em "+ Nova tarefa", e o botão "+ Nova tarefa" não aparece
