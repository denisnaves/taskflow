# Spec Delta

## Purpose

Permite que o usuário crie uma nova tarefa pelo formulário revelado na página, adicionando-a à lista em tela e persistindo-a no LocalStorage.

## ADDED Requirements

### Requirement: Criar tarefa a partir do formulário
Ao confirmar o formulário (botão "+ Adicionar" ou Enter) com um texto não vazio, o sistema SHALL criar uma nova tarefa, adicioná-la à lista exibida em tela e salvá-la no LocalStorage.

#### Scenario: Criação com texto válido
- **WHEN** o usuário digita um texto no campo de nova tarefa e confirma (botão "+ Adicionar" ou Enter)
- **THEN** a tarefa aparece na lista exibida em tela e é salva no LocalStorage
- **AND** o campo de texto é limpo para permitir a criação da próxima tarefa

#### Scenario: Tentativa de criação com texto vazio
- **WHEN** o usuário confirma o formulário sem digitar nenhum texto (ou apenas espaços)
- **THEN** nenhuma tarefa é criada, nenhuma tarefa é salva no LocalStorage e a lista em tela permanece inalterada

#### Scenario: Formulário permanece visível após criar uma tarefa
- **WHEN** o usuário cria uma tarefa com sucesso
- **THEN** o campo de texto e o botão "+ Adicionar" continuam visíveis, permitindo criar outra tarefa sem clicar novamente em "+ Nova tarefa"
