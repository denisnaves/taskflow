# Spec Delta

## Purpose

Define a identidade visual do TaskFlow: marca bicolor, fundo claro, itens em cartões arredondados e cores amigáveis para filtros e status, sem alterar o comportamento da aplicação.

## ADDED Requirements

### Requirement: Marca TaskFlow bicolor
O título da aplicação SHALL exibir "Task" em azul e "Flow" em preto, formando o texto "TaskFlow".

#### Scenario: Título exibido
- **WHEN** a página é carregada
- **THEN** o título mostra "Task" em azul seguido de "Flow" em preto

### Requirement: Fundo claro e itens em cartões brancos
A página SHALL ter fundo cinza claro, e cada tarefa SHALL ser exibida dentro de um componente arredondado de fundo branco com sombra suave, e o campo de texto do formulário SHALL ter fundo branco e cantos arredondados.

#### Scenario: Lista com tarefas
- **WHEN** existem tarefas na lista
- **THEN** o fundo da página é cinza claro e cada tarefa aparece em um cartão branco de cantos arredondados

### Requirement: Botões de ação azuis
Os botões "+ Adicionar" e "+ Nova tarefa" SHALL ter fundo azul e texto branco.

#### Scenario: Botões visíveis
- **WHEN** o botão "+ Nova tarefa" (estado vazio) ou "+ Adicionar" (formulário) é exibido
- **THEN** ele aparece com fundo azul e texto branco

### Requirement: Filtros e status coloridos
Os filtros e os status das tarefas SHALL usar cores com fundo claro e texto em negrito: Pendentes (e status "Pendente") em laranja, Concluídas (e status "Concluída") em verde e Todas em azul. O filtro ativo SHALL ser destacado por uma borda na cor do filtro.

#### Scenario: Filtros exibidos
- **WHEN** a barra de filtros é exibida
- **THEN** "Pendentes" tem fundo laranja claro e texto laranja em negrito, "Concluídas" tem fundo verde claro e texto verde em negrito, e "Todas" tem fundo azul claro e texto azul em negrito
- **AND** o filtro ativo tem uma borda na sua cor

#### Scenario: Status de uma tarefa
- **WHEN** uma tarefa pendente e uma concluída são exibidas
- **THEN** o status "Pendente" aparece em laranja em negrito e o status "Concluída" em verde em negrito

### Requirement: Sem imagem de prancheta
Nenhuma tela da aplicação, inclusive o estado vazio e os itens de tarefa, SHALL exibir imagem ou ícone de prancheta.

#### Scenario: Estado vazio
- **WHEN** não há tarefas
- **THEN** a tela exibe apenas a mensagem e o botão "+ Nova tarefa", sem imagem ou ícone de prancheta
