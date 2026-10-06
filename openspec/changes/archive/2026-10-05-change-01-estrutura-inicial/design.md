# Design

## Context

Projeto HTML/CSS/JavaScript puro, sem frameworks, sem build step e sem dependências externas (`CLAUDE.md` e Skill `web-dev`). Já existia `js/storage.js` com `carregarTarefas`/`salvarTarefa` rudimentares. Ver `proposal.md` - Why para a motivação.

## Goals / Non-Goals

**Goals:**
- Definir a estrutura de arquivos e a divisão de responsabilidades entre `index.html`, `css/style.css`, `js/storage.js` e `js/ui.js`.
- Definir como o formulário de criação é revelado/permanece visível, incluindo o comportamento após recarregar a página (ponto que gerou ambiguidade real durante a implementação).
- Definir o formato do item de tarefa persistido no LocalStorage.

**Non-Goals:**
- Qualquer lógica de status (pendente/concluída), filtros, exclusão ou edição — fora de escopo desta Change (ver `proposal.md`).
- Comportamento do botão de configuração além de ser exibido sem ação.

## Decisions

- **Um único container de listagem (`#area-lista`) renderizado via `renderTarefas(lista)`**, em vez de dois elementos separados para "estado vazio" e "lista com itens". `renderTarefas` limpa o container (`removeChild` em loop, evitando `innerHTML` com conteúdo dinâmico) e recria ou a mensagem de estado vazio + botão "+ Nova tarefa", ou a `<ul>` de tarefas. Alternativa considerada: manter os dois blocos sempre no DOM e alternar `hidden` — descartada por exigir sincronizar dois lugares a cada mudança de estado, mais complexo para o mesmo resultado.
- **Revelação do formulário por estado, não por evento único**: `formulario.hidden` é definido como `false` tanto pelo clique em "+ Nova tarefa" (`revelarFormulario`) quanto, direto em `renderTarefas`, sempre que a lista não estiver vazia. Isso resolve um problema encontrado durante o teste manual: como o atributo `hidden` é estático no HTML, ao recarregar a página com tarefas já salvas o formulário voltava a ficar oculto e não havia mais botão "+ Nova tarefa" (ele só existe no estado vazio) para revelá-lo de novo. Alternativa considerada: persistir uma flag "formulário revelado" no LocalStorage — descartada por adicionar estado extra sem necessidade, já que "existe ao menos uma tarefa" já é um sinal suficiente de que o formulário deve estar visível.
- **Item de tarefa como `{ id, texto }`**, com `id` gerado por `Date.now()` em `salvarTarefa`. Simples e suficiente para esta Change (sem necessidade de unicidade forte entre abas simultâneas, fora de escopo).
- **Sem delegação de eventos na lista de tarefas**: cada `<li>` é apenas texto (`textContent`), sem botões ou ações por item nesta Change, então não há necessidade de um listener no elemento pai. Delegação será reavaliada quando ações por item (concluir/excluir) forem adicionadas em uma Change futura.
- **Botão de configuração sem nenhum listener JavaScript** — a forma mais simples de garantir "nenhum efeito observável ao clicar" é não anexar nenhum comportamento a ele.

## Risks / Trade-offs

- [Formulário aparece imediatamente ao recarregar a página com tarefas existentes, em vez de só quando o usuário pede] → Aceito: é o comportamento que permite criar novas tarefas em qualquer momento, condição necessária da capability `criar-tarefa`; o estado totalmente vazio (progressive disclosure) continua restrito à primeira visita, sem tarefas salvas.
- [`id` baseado em `Date.now()` pode colidir em criações extremamente rápidas/simultâneas] → Mitigação: fora do uso real esperado nesta Change (um usuário, um formulário, uma submissão por vez); pode ser revisitado se Changes futuras exigirem IDs mais robustos.
