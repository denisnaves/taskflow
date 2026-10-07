# Proposal

## Why

Com várias tarefas na lista, o usuário não consegue ver só o que ainda falta fazer ou só o que já terminou. Os filtros Todas, Pendentes e Concluídas resolvem isso. Também é preciso garantir que as tarefas, inclusive as concluídas, continuem disponíveis após atualizar a página.

## What Changes

- Adicionar, acima da lista, três filtros: **Todas**, **Pendentes** e **Concluídas**. Todas é o filtro padrão.
- Cada filtro exibe apenas o tipo de tarefa selecionado.
- Ao marcar o checkbox de uma tarefa (ex.: "Estudar claude-code"), ela passa de Pendente para Concluída, continua em Todas e passa a aparecer em Concluídas (e deixa de aparecer em Pendentes).
- Quando o filtro ativo não tem nenhuma tarefa, exibir uma mensagem curta de lista vazia para aquele filtro.
- Ao excluir a última tarefa (ou todas), voltar à tela inicial do estado vazio: mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar." com o botão "+ Nova tarefa", formulário e filtros ocultos, filtro de volta em Todas. Hoje o formulário continua visível e o botão não reaparece.
- Persistência via LocalStorage: já existe desde as Changes 01 e 02 (tarefas e status são salvos). Esta Change **não altera esse mecanismo**; ela o valida com teste de recarregar a página, inclusive com filtros.

Fora do escopo: persistir o filtro selecionado entre recarregamentos (ao recarregar, volta para Todas), contadores nos filtros, buscas, ordenação.

## Capabilities

### New Capabilities
- `filtrar-tarefas`: filtros Todas, Pendentes e Concluídas sobre a lista de tarefas.

### Modified Capabilities
- `excluir-tarefa`: ao excluir a última tarefa, a tela volta ao estado inicial (com o botão "+ Nova tarefa" e sem formulário).

## Impact

- `index.html`: barra de filtros (botões) acima da área de lista.
- `css/style.css`: estilo dos filtros e do filtro ativo.
- `js/ui.js`: estado do filtro ativo, filtragem na renderização e tratamento de clique nos filtros.
- `js/storage.js`: sem alteração.
