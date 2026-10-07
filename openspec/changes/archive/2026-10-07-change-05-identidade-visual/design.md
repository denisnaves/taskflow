# Design

## Context

Ver proposal.md. O comportamento não muda; só a camada de apresentação (HTML do título e CSS). Os filtros já têm `data-filtro` e o item concluído já recebe `.tarefa-concluida`, então o CSS consegue colorir sem alterar `js/`.

## Decisions

- Título: `<h1><span class="marca-task">Task</span><span class="marca-flow">Flow</span></h1>`. O nome acessível continua "TaskFlow".
- Cores por seletor `.filtro[data-filtro="..."]` (Todas azul, Pendentes laranja, Concluídas verde), com fundo claro e texto em negrito. O ativo usa `.filtro-ativo` com borda de 2px na cor do filtro (sem preencher de cor sólida).
- Status: `.tarefa-status` laranja em negrito por padrão e `.tarefa-concluida .tarefa-status` verde, com fundo claro de "selo".
- Cartões: cada `li` com fundo branco, `border-radius: 12px` e sombra suave; fundo da página cinza claro. Cores definidas direto no CSS (sem variáveis) para manter a simplicidade.
- Sem imagens nem ícones novos.

## Risks / Trade-offs

- Contraste: usar tons escuros de laranja/verde/azul no texto sobre fundos claros para manter legibilidade.
