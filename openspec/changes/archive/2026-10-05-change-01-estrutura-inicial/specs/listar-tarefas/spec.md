# Spec Delta

## Purpose

Garante que as tarefas salvas no LocalStorage sejam carregadas e exibidas na lista da página sempre que ela for aberta ou recarregada.

## ADDED Requirements

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
