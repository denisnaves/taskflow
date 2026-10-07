# Tasks

## 1. Correções da revisão

- [x] 1.1 Em `js/ui.js`, fazer `focarConclusaoTarefa` focar o botão do filtro ativo quando o checkbox não existir; verificar lendo o fluxo de `handleAlternarConclusao` com filtro Pendentes e com Todas
- [x] 1.2 Em `css/style.css`, unificar as regras duplicadas do botão de submit e de `#botao-nova-tarefa`; verificar que o seletor combinado contém as 6 declarações uma única vez
- [x] 1.3 Em `js/ui.js`, substituir o `DOMContentLoaded` por chamada direta a `atualizarListagem()`; verificar com `node --check js/ui.js`

## 2. Validação

- [x] 2.1 Rodar de novo `code-reviewer` e `spec-validator` e verificar que não restam problemas
- [x] 2.2 Rodar `openspec validate change-04-ajustes-revisao --strict` e verificar que passa
