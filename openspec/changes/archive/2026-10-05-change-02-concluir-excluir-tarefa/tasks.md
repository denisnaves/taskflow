# Tasks

## 1. Persistência (LocalStorage)

- [x] 1.1 Em `js/storage.js`, salvar novas tarefas com `concluida: false` e ler tarefas sem o campo como pendentes. Verificar no console: `salvarTarefa("a")` retorna `{ id, texto, concluida: false }` e uma tarefa gravada à mão sem `concluida` é tratada como pendente.
- [x] 1.2 Em `js/storage.js`, criar `alternarConclusaoTarefa(id)` que inverte `concluida` apenas da tarefa com o id e salva. Verificar no console: alterna a tarefa certa, mantém as demais e o resultado persiste após recarregar.
- [x] 1.3 Em `js/storage.js`, criar `excluirTarefa(id)` que remove só a tarefa com o id e salva. Verificar no console: a tarefa some do LocalStorage e as demais permanecem na mesma ordem.

## 2. Interface

- [x] 2.1 Em `js/ui.js`, renderizar cada item com `data-id`, caixa de seleção (marcada se concluída), texto, status ("Pendente"/"Concluída") e botão de lixeira, usando `createElement`/`textContent`. Verificar no navegador: tarefas pendentes e concluídas aparecem com os elementos corretos.
- [x] 2.2 Em `js/ui.js`, tratar `change` da caixa de seleção por delegação de eventos, chamando `alternarConclusaoTarefa` e redesenhando a lista. Verificar no navegador: marcar/desmarcar altera o status e persiste após recarregar.
- [x] 2.3 Em `js/ui.js`, tratar `click` da lixeira por delegação de eventos, chamando `excluirTarefa` e redesenhando a lista (incluindo o estado vazio ao excluir a última). Verificar no navegador: a tarefa some, persiste após recarregar e, ao excluir a última, aparece a mensagem de estado vazio sem o botão "+ Nova tarefa" enquanto o formulário estiver visível.
- [x] 2.4 Em `css/style.css`, estilizar item concluído (texto riscado/esmaecido), status e lixeira (a caixa de seleção usa o estilo padrão do navegador). Verificar visualmente que concluído e pendente se distinguem e os controles estão legíveis.

## 3. Verificação integrada

- [x] 3.1 Testar o fluxo completo no navegador: criar duas tarefas ("Estudar Claude Code" e "Configurar OpenSpec"), concluir uma, recarregar, excluir uma, recarregar, excluir a outra; sem erros no console em nenhum passo.
