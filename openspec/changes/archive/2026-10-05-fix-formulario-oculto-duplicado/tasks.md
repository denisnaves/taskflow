# Tasks

## 1. Diagnóstico e correção

- [x] 1.1 Identificar a causa raiz do bug (especificidade CSS de `#formulario-tarefa { display: flex }` sobrepondo `[hidden]`). Verificado lendo `css/style.css` e confirmando que o atributo `hidden` não tinha efeito visual.
- [x] 1.2 Adicionar `#formulario-tarefa[hidden] { display: none; }` em `css/style.css`. Verificado servindo o arquivo atualizado via servidor local e confirmando via `curl` que a regra está presente no CSS entregue.
- [x] 1.3 Ajustar `revelarFormulario()` em `js/ui.js` para chamar `atualizarListagem()` após revelar o formulário, garantindo que o botão "+ Nova tarefa" deixe de ser desenhado. Verificado pelo rastreio do código (estado `formulario.hidden` controla a renderização do botão em `renderTarefas`).

## 2. Verificação

- [x] 2.1 Testar manualmente no navegador: tela inicial mostra só mensagem + "+ Nova tarefa"; ao clicar, aparece só campo + "+ Adicionar" (sem "+ Nova tarefa"); criar e listar tarefas continuam funcionando. Confirmado pelo usuário ("Testei a criação e listagem").
