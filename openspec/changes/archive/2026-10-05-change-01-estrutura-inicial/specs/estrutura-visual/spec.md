# Spec Delta

## Purpose

Define o layout inicial da página do TaskFlow, fornecendo os elementos visuais necessários para o usuário criar e visualizar tarefas.

## ADDED Requirements

### Requirement: Layout inicial da página
A aplicação SHALL exibir, ao ser aberta, um título "TaskFlow", um botão de configuração e uma área onde a lista de tarefas (ou o estado vazio) é exibida.

#### Scenario: Página carregada
- **WHEN** o usuário abre a aplicação
- **THEN** a página exibe o título "TaskFlow", o botão de configuração e a área de listagem (vazia ou com tarefas), sem erros no console

#### Scenario: Elementos acessíveis via teclado e leitura
- **WHEN** a página é carregada e o formulário de criação está visível
- **THEN** o campo de texto do formulário possui um `label` ou atributo associado que identifica sua finalidade (ex.: "Nova tarefa")

### Requirement: Estado vazio da listagem
Quando não há nenhuma tarefa salva, a área de listagem SHALL exibir a mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar." e um botão "+ Nova tarefa".

#### Scenario: Tela inicial sem tarefas
- **WHEN** o usuário abre a aplicação e não há tarefas salvas no LocalStorage
- **THEN** a área de listagem exibe a mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar." e o botão "+ Nova tarefa"

### Requirement: Revelar formulário de criação
Ao clicar no botão "+ Nova tarefa", o sistema SHALL exibir o formulário de criação de tarefa (campo de texto + botão "+ Adicionar"). O formulário também SHALL ser exibido automaticamente, sem exigir esse clique, sempre que já existir ao menos uma tarefa salva (inclusive após recarregar a página) — ele só começa oculto no estado vazio.

#### Scenario: Usuário clica em "+ Nova tarefa"
- **WHEN** o usuário clica no botão "+ Nova tarefa", a partir do estado vazio
- **THEN** o campo de texto e o botão "+ Adicionar" passam a ser exibidos na tela

#### Scenario: Página recarregada com tarefas existentes
- **WHEN** o usuário recarrega a página e já existe ao menos uma tarefa salva no LocalStorage
- **THEN** o formulário (campo de texto + botão "+ Adicionar") já é exibido, sem necessidade de clicar em "+ Nova tarefa"

### Requirement: Botão de configuração sem ação
O botão de configuração SHALL ser exibido na tela, mas SHALL NOT produzir nenhum efeito observável ao ser clicado nesta Change (sem modal, navegação ou alteração de dados).

#### Scenario: Usuário clica no botão de configuração
- **WHEN** o usuário clica no botão de configuração
- **THEN** nenhuma mudança visível ocorre na tela e nenhum erro aparece no console
