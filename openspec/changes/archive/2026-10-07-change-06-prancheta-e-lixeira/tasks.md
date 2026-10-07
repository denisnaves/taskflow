# Tasks

## 1. Ilustrações

- [x] 1.1 Criar `img/prancheta.svg`, `img/lixeira.svg` e `img/lixeira-vermelha.svg`; verificar abrindo cada arquivo (captura de tela)
- [x] 1.2 Em `js/ui.js`, exibir a prancheta acima da mensagem no estado vazio e remover o emoji da lixeira; verificar na primeira e na segunda tela e que ela some com tarefas
- [x] 1.3 Em `css/style.css`, estilizar a prancheta e o botão de lixeira (cinza, vermelho no hover); verificar visualmente
- [x] 1.4 Em `js/ui.js` e `css/style.css`, dividir a mensagem do estado vazio em duas linhas ("Nenhuma tarefa ainda." em negrito e "Adicione sua primeira tarefa para começar." abaixo) e centralizar mensagem e botão "+ Nova tarefa"; verificar na primeira tela
- [x] 1.5 Aumentar em ~10% o botão "+ Nova tarefa" e dar foco visível a ele na primeira tela; verificar na primeira tela (foco e contorno)
- [x] 1.6 Exibir o total de tarefas em cada filtro (Todas, Pendentes, Concluídas) e atualizá-lo a cada alteração; verificar com tarefas pendentes e concluídas e com outro filtro ativo

## 2. Validação

- [x] 2.1 Teste no navegador: primeira tela, segunda tela (após "+ Nova tarefa"), criar tarefa, atualizar a página, concluir e excluir
- [x] 2.2 Rodar `code-reviewer` e `spec-validator`, corrigir problemas e rodar de novo
- [x] 2.3 Rodar `openspec validate change-06-prancheta-e-lixeira --strict` e verificar que passa
