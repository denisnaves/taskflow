# Tasks

## 1. Estrutura visual inicial

- [x] 1.1 Criar `index.html` com título "TaskFlow", botão de configuração (sem ação associada) e um container de listagem (ex.: `<ul id="lista-tarefas">`), referenciando `css/style.css` e os scripts `js/storage.js` e `js/ui.js`. Verificar abrindo o arquivo no navegador: título e botão de configuração aparecem, sem erros no console.
- [x] 1.2 Implementar o estado vazio da listagem: quando não há tarefas, exibir a mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar." e o botão "+ Nova tarefa" (formulário de criação oculto por padrão). Verificar que, sem tarefas salvas, a mensagem e o botão aparecem e o formulário não está visível.
- [x] 1.3 Criar `css/style.css` com estilo básico do layout (título, botão de configuração, estado vazio, formulário, lista). Verificar visualmente que os elementos estão organizados e legíveis.

## 2. Persistência de tarefas (LocalStorage)

- [x] 2.1 Revisar `js/storage.js` existente (`carregarTarefas`/`salvarTarefa`) e ajustar `salvarTarefa` para receber o texto da tarefa e gerar o item a ser salvo (ex.: `{ id, texto }`). Verificar no console do navegador: chamar `salvarTarefa("teste")` e depois `carregarTarefas()` retorna o item salvo.

## 3. Criar tarefa

- [x] 3.1 Implementar em `js/ui.js` o listener de clique no botão "+ Nova tarefa" que revela o campo de texto e o botão "+ Adicionar". Verificar que, ao clicar em "+ Nova tarefa", o formulário passa a ser exibido e permanece visível.
- [x] 3.2 Implementar o listener de `submit`/clique em "+ Adicionar" que lê o valor do campo, chama `salvarTarefa` e atualiza a lista em tela. Verificar que, ao digitar um texto e confirmar, a tarefa aparece na lista e permanece após recarregar a página.
- [x] 3.3 Bloquear a criação quando o texto estiver vazio ou só com espaços (nenhuma tarefa criada nem salva). Verificar confirmando o formulário vazio: a lista não muda e o LocalStorage não é alterado.
- [x] 3.4 Limpar o campo de texto após a criação bem-sucedida de uma tarefa, mantendo o formulário visível para a próxima criação. Verificar que o input fica vazio e o formulário continua visível após adicionar uma tarefa.

## 4. Listar tarefas

- [x] 4.1 Implementar `renderTarefas(lista)` em `js/ui.js`, que recria o conteúdo da área de listagem a partir de um array de tarefas usando `createElement`/`textContent`, exibindo o estado vazio (mensagem + "+ Nova tarefa") quando a lista estiver vazia. Verificar chamando a função com um array de exemplo e com array vazio, confirmando os dois comportamentos.
- [x] 4.2 Ao carregar a página (`DOMContentLoaded`), chamar `carregarTarefas()` e `renderTarefas()` para exibir as tarefas salvas (ou o estado vazio). Verificar que, com tarefas salvas no LocalStorage, elas aparecem ao abrir/recarregar a página, e que o estado vazio aparece quando não há tarefas salvas.

## 5. Verificação integrada

- [x] 5.1 Testar manualmente o fluxo completo no navegador: abrir a página (estado vazio), clicar em "+ Nova tarefa", criar duas tarefas, recarregar a página e confirmar que ambas continuam listadas na mesma ordem, sem erros no console durante todo o fluxo.
