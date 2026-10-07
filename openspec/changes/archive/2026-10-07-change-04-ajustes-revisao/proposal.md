# Proposal

## Why

A revisão de código (agente `code-reviewer`) encontrou um erro de foco do teclado e duas melhorias de simplicidade. A validação contra as Specs (agente `spec-validator`) não encontrou divergências.

## What Changes

- **Foco após concluir com filtro ativo**: com o filtro "Pendentes" ou "Concluídas", marcar/desmarcar uma tarefa a remove da lista visível e o foco do teclado se perde no `<body>`. Passa a ir para o botão do filtro ativo.
- **CSS**: unificar as regras duplicadas de `#formulario-tarefa button[type="submit"]` e `#botao-nova-tarefa`.
- **JS**: chamar `atualizarListagem()` diretamente, sem `DOMContentLoaded`, pois o script já fica no fim do `<body>`.

Fora do escopo: demais comportamentos já existentes (foco, aria-labels), que não foram apontados como problema.

## Capabilities

### New Capabilities

### Modified Capabilities
- `concluir-tarefa`: novo requisito de foco quando a tarefa sai da lista visível por causa do filtro.

## Impact

- `js/ui.js`, `css/style.css`. Sem mudança de dados nem de `storage.js`.
