# Design

## Context

Estado atual (Change 01): `js/storage.js` guarda um array de `{ id, texto }` no LocalStorage (chave `taskflow.tasks`); `js/ui.js` recria a área de listagem em `renderTarefas(tarefas)` e cada `<li>` é só texto. Ver `proposal.md` - Why para a motivação.

## Goals / Non-Goals

**Goals:**
- Acrescentar status e exclusão por item mantendo as camadas atuais (persistência em `storage.js`, interface em `ui.js`).
- Não quebrar tarefas já salvas sem o campo de status.

**Non-Goals:**
- Filtros, contadores, edição, confirmação de exclusão e desfazer (ver `proposal.md`).

## Decisions

- **Status como booleano `concluida` no item** (`{ id, texto, concluida }`). Tarefas antigas sem o campo são lidas como `concluida === false` (`!!tarefa.concluida`), sem migração de dados. Alternativa considerada: string de status (`"pendente"`/`"concluida"`) — descartada, pois só há dois estados e o booleano é mais simples; o rótulo "Pendente"/"Concluída" é derivado na interface. Novas tarefas passam a ser salvas com `concluida: false` explícito.
- **Funções de persistência por id**: `alternarConclusaoTarefa(id)` e `excluirTarefa(id)` em `storage.js`, ambas carregando a lista, alterando e salvando via a mesma rotina centralizada. Operar por `id` (e não por posição) evita alterar a tarefa errada se a ordem mudar.
- **Delegação de eventos na `<ul>`**: agora que existem controles por item, um único listener de `change` (caixa de seleção) e um de `click` (lixeira) no `#area-lista`/`<ul>` identifica o item via `data-id` do `<li>`. É a situação prevista na Skill `web-dev` e na decisão da Change 01 ("reavaliar quando houver ações por item"). Alternativa: um listener por item — descartada por ser recriado a cada renderização.
- **Reuso da renderização completa**: após qualquer alteração, chama-se `atualizarListagem()` (relê o LocalStorage e redesenha), mantendo o estado da tela sempre derivado dos dados salvos.
- **Elementos criados com `createElement`/`textContent`** (sem `innerHTML` com texto do usuário) para evitar XSS; a lixeira é um `<button type="button">` com `aria-label` ("Excluir tarefa: <texto>") e a caixa de seleção tem `aria-label` ("Concluir tarefa: <texto>"). Como a lista é recriada a cada alteração, o foco do teclado é devolvido à caixa de seleção da tarefa alterada (ou da vizinha, ou ao campo de texto, após excluir).

## Risks / Trade-offs

- [Exclusão sem confirmação pode apagar uma tarefa por engano] → Aceito nesta Change por simplicidade; desfazer/confirmar pode ser uma Change futura.
- [`id` baseado só em `Date.now()` poderia colidir em criações no mesmo milissegundo e fazer concluir/excluir afetar duas tarefas] → Mitigação: o id é `max(Date.now(), maiorIdExistente + 1)`, sempre único dentro da lista.
