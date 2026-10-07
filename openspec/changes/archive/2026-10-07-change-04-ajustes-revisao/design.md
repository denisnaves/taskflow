# Design

## Context

Ver proposal.md. `focarConclusaoTarefa(id)` em `js/ui.js` só foca o checkbox se ele existir na lista renderizada.

## Decisions

- Em `focarConclusaoTarefa`, se o checkbox não for encontrado, focar `barraFiltros.querySelector(".filtro-ativo")`. Mudança mínima, sem nova função.
- CSS: seletor com vírgula para as duas regras idênticas.
- Remover `DOMContentLoaded`: o script está no fim do `<body>`, então o DOM já existe.

## Risks / Trade-offs

- Em `handleExcluir` a função também é usada com o id do vizinho, que sempre existe; sem efeito colateral.
