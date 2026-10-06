# Proposal

## Why

Com a Change 01 o usuário já consegue criar e listar tarefas, mas não consegue acompanhar o andamento delas nem remover as que não interessam mais. Esta Change adiciona o ciclo de vida mínimo de uma tarefa: marcá-la como concluída e excluí-la.

## What Changes

- Cada tarefa listada passa a exibir seu **status** ("Pendente" ou "Concluída") e dois controles: uma caixa de seleção para marcar/desmarcar como concluída e um botão de lixeira para excluir.
- **Concluir tarefa**: marcar a caixa muda o status para "Concluída" (com destaque visual no texto) e persiste a mudança no LocalStorage; desmarcar volta a "Pendente".
- **Excluir tarefa**: clicar na lixeira remove a tarefa da lista e do LocalStorage imediatamente, sem confirmação.
- Tarefas já salvas antes desta Change (sem o campo de status) são tratadas como pendentes.

**Suposições registradas** (detalhes não especificados, assumidos para esta Change):
- A caixa de seleção alterna nos dois sentidos (concluir e reabrir); não há controle separado para "reabrir".
- A exclusão é imediata, sem diálogo de confirmação (mais simples; fora de escopo desta Change).
- Ao excluir a última tarefa, a listagem volta a exibir a mensagem de estado vazio; o formulário de criação, se já estiver visível, permanece visível.

Fora de escopo nesta Change (não implementar agora): filtros por status (Todas/Pendentes/Concluídas) e contadores, editar o texto da tarefa, ordenar, desfazer exclusão, botão de configuração com ação. Ficam para Changes futuras.

## Capabilities

### New Capabilities
- `concluir-tarefa`: o usuário marca/desmarca uma tarefa como concluída; o status é persistido no LocalStorage.
- `excluir-tarefa`: o usuário exclui uma tarefa pela lixeira; ela é removida da tela e do LocalStorage.

### Modified Capabilities
- `listar-tarefas`: cada item listado passa a exibir o status da tarefa e os controles de concluir e excluir.

## Impact

- `js/storage.js`: novas funções para alternar o status e excluir tarefa; leitura tolerante a tarefas sem o campo de status.
- `js/ui.js`: renderização do status/controles por item e tratamento de eventos da lista.
- `css/style.css`: estilo do item concluído, caixa de seleção e botão de lixeira.
- `index.html`: sem alteração prevista.
- Sem novas dependências, frameworks ou build step (conforme `CLAUDE.md` e Skill `web-dev`).
