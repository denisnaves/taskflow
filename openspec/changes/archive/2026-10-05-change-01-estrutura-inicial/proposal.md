# Proposal

## Why

O TaskFlow ainda não possui nenhuma interface nem funcionalidade. É preciso estabelecer a primeira versão utilizável da aplicação: uma tela inicial onde o usuário consiga criar tarefas e vê-las listadas, servindo de base para as próximas Changes.

## What Changes

- Criação da estrutura visual inicial da aplicação (`index.html` + `css/style.css`): título "TaskFlow", botão de configuração e área de listagem de tarefas.
- Estado vazio: quando não há tarefas, a área de listagem exibe a mensagem "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar." e um botão **"+ Nova tarefa"**.
- Criar uma tarefa: ao clicar em "+ Nova tarefa", o formulário de criação é revelado (campo de texto + botão **"+ Adicionar"**). Preenchendo o campo e confirmando (botão ou Enter), a tarefa é adicionada à lista exibida em tela e persistida no LocalStorage. O formulário permanece visível depois de revelado, permitindo criar outras tarefas sem clicar em "+ Nova tarefa" novamente.
- Listagem das tarefas: todas as tarefas salvas no LocalStorage são exibidas na tela, inclusive após recarregar a página.

**Suposições registradas** (detalhes não especificados explicitamente, assumidos para esta Change):
- O botão de configuração é exibido apenas como elemento visual nesta Change, sem nenhuma ação associada (sem modal, navegação ou efeito ao ser clicado). Seu comportamento será definido em uma Change futura.
- "+ Nova tarefa" revela o formulário de criação; uma vez revelado, ele não volta a ficar oculto nesta Change.

Fora de escopo nesta Change (não implementar agora): editar tarefa, marcar como concluída, excluir (lixeira), filtros/contadores por status (Todas/Pendentes/Concluídas) e ordenar tarefas. Essas funcionalidades dependem de a tarefa ter um status (pendente/concluída) e ficam para uma Change futura (ex.: Change 02).

## Capabilities

### New Capabilities
- `estrutura-visual`: layout inicial da página (título, botão de configuração, estado vazio com botão "+ Nova tarefa", formulário de criação revelável e container da lista de tarefas).
- `criar-tarefa`: o usuário cria uma nova tarefa pelo formulário revelado via "+ Nova tarefa", que é validada, adicionada à lista em tela e salva no LocalStorage.
- `listar-tarefas`: as tarefas salvas no LocalStorage são carregadas e exibidas em tela ao abrir/recarregar a página.

### Modified Capabilities
_Nenhuma — projeto ainda não possui capabilities existentes._

## Impact

- Novos arquivos: `index.html`, `css/style.css`, `js/ui.js` (ou equivalente de interface).
- Arquivo existente `js/storage.js` reutilizado/ajustado para servir de camada de persistência (`carregarTarefas`/`salvarTarefa`) às capabilities `criar-tarefa` e `listar-tarefas`.
- Nenhuma dependência externa, framework ou build step é introduzido (conforme `CLAUDE.md` e a Skill `web-dev`).
