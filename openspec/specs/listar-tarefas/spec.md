# listar-tarefas Specification

## Purpose

Garante que as tarefas salvas no LocalStorage sejam carregadas e exibidas na lista da página sempre que ela for aberta ou recarregada.

## Requirements

### Requirement: Listar tarefas salvas ao carregar a página
Ao carregar a página, o sistema SHALL ler as tarefas salvas no LocalStorage e exibi-las, em ordem, na área de listagem.

#### Scenario: Página recarregada com tarefas salvas
- **WHEN** existem tarefas salvas no LocalStorage e o usuário abre ou recarrega a página
- **THEN** todas as tarefas salvas são exibidas na lista, na mesma ordem em que foram criadas

#### Scenario: Página carregada sem tarefas salvas
- **WHEN** não há tarefas salvas no LocalStorage (chave ausente ou lista vazia)
- **THEN** a área de listagem exibe o estado vazio definido na capability `estrutura-visual` (mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar." e botão "+ Nova tarefa"), sem erros no console

#### Scenario: Nova tarefa criada reflete imediatamente na lista
- **WHEN** uma tarefa é criada através do formulário (ver capability `criar-tarefa`)
- **THEN** ela passa a constar na listagem exibida, sem necessidade de recarregar a página

### Requirement: Exibir status e controles em cada tarefa
Cada tarefa listada SHALL exibir seu texto, seu status ("Pendente" ou "Concluída"), uma caixa de seleção para concluir/reabrir (ver capability `concluir-tarefa`) e um botão de lixeira para excluir (ver capability `excluir-tarefa`).

#### Scenario: Tarefa pendente na lista
- **WHEN** uma tarefa pendente é exibida na listagem
- **THEN** o item mostra o texto, o status "Pendente", a caixa de seleção desmarcada e o botão de lixeira

#### Scenario: Tarefa concluída na lista
- **WHEN** uma tarefa concluída é exibida na listagem (inclusive após recarregar a página)
- **THEN** o item mostra o texto destacado como concluído, o status "Concluída", a caixa de seleção marcada e o botão de lixeira
