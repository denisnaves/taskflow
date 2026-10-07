# Tasks

## 1. Filtros na interface

- [x] 1.1 Adicionar em `index.html` a barra `#filtros` com os botões Todas, Pendentes e Concluídas (sem inline), oculta por padrão; verificar abrindo a página e inspecionando o HTML
- [x] 1.2 Estilizar a barra e o filtro ativo em `css/style.css`; verificar visualmente que o ativo se destaca
- [x] 1.3 Em `js/ui.js`, criar o estado `filtroAtivo`, filtrar as tarefas em `atualizarListagem`, tratar o clique nos filtros por delegação, exibir/ocultar a barra conforme existam tarefas e mostrar a mensagem de filtro sem resultados; verificar manualmente os cenários de `specs/filtrar-tarefas/spec.md`

- [x] 1.4 Em `handleExcluir` (`js/ui.js`), se após excluir não restar nenhuma tarefa, ocultar o formulário e voltar o filtro para Todas antes de atualizar a listagem; verificar excluindo todas as tarefas: aparecem a mensagem e o botão "+ Nova tarefa", sem formulário e sem filtros, e criar uma nova tarefa funciona

## 2. Validação

- [x] 2.1 Teste no navegador: criar "Estudar claude-code" e outra tarefa, marcar o checkbox de "Estudar claude-code" e verificar que ela fica Concluída, continua em Todas, aparece em Concluídas e some de Pendentes; verificar que cada filtro exibe só seu tipo
- [x] 2.2 Atualizar a página e verificar que as tarefas e seus status continuam, com o filtro voltando a Todas
- [x] 2.3 Rodar `openspec validate change-03-filtros-tarefas --strict` e verificar que passa
