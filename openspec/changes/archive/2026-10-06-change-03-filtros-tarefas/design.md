# Design

## Context

Hoje `js/ui.js` renderiza a lista completa a partir de `carregarTarefas()`, e `js/storage.js` já persiste tarefas e status no LocalStorage (chave `taskflow.tasks`). Ver proposal.md.

## Goals / Non-Goals

**Goals:**
- Filtrar na renderização, sem alterar o formato dos dados salvos.

**Non-Goals:**
- Persistir o filtro ativo; contadores; qualquer mudança em `storage.js`.

## Decisions

- **Filtro como estado em memória** (`let filtroAtivo = "todas"` em `ui.js`), com valores `"todas" | "pendentes" | "concluidas"`. Ao recarregar volta para "todas". Alternativa descartada: salvar no LocalStorage (não foi pedido).
- **Filtragem na camada de interface**: `atualizarListagem()` carrega todas as tarefas e aplica `.filter` conforme `filtroAtivo` antes de `renderTarefas`. Os dados salvos nunca são filtrados, então concluir/excluir continuam operando por id sobre a lista completa.
- **Barra de filtros em HTML estático** (`<nav id="filtros">` com três `<button type="button" data-filtro="...">`), dentro de `<main>` antes de `#area-lista`, oculta (`hidden`) quando não há tarefas salvas. Clique tratado por delegação em `#filtros`; o filtro ativo recebe a classe `filtro-ativo` e `aria-pressed="true"`.
- **Estado vazio por filtro**: `renderTarefas` diferencia "não há tarefas salvas" (estado vazio existente) de "filtro sem resultados" (mensagem simples: "Nenhuma tarefa neste filtro."). O botão "+ Nova tarefa" aparece apenas no primeiro caso.
- **Volta à tela inicial ao zerar a lista**: em `atualizarListagem`, quando não há tarefas salvas, `formulario.hidden = true` e `filtroAtivo = "todas"` antes de renderizar; assim `renderTarefas` exibe a mensagem com o botão "+ Nova tarefa". Isso só acontece se a lista estiver vazia, então não interfere no fluxo de revelar o formulário (que revela o formulário e chama `atualizarListagem` com a lista ainda vazia): por isso a ocultação ocorre em `handleExcluir`, e não em `atualizarListagem`.
- Sem estilos/JS inline; CSS em `css/style.css`.

## Risks / Trade-offs

- [Concluir no filtro Pendentes faz o item sumir e o foco se perder] → `focarConclusaoTarefa` não encontra o elemento e nada é focado; aceitável, sem tratamento extra.
- [Última tarefa do filtro some e a lista fica vazia] → coberto pela mensagem de filtro sem resultados.
