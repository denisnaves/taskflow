# Spec Delta

## ADDED Requirements

### Requirement: Exibir a prioridade de cada tarefa
Cada tarefa listada SHALL exibir sua prioridade ("Alta", "Média" ou "Baixa"), inclusive após recarregar a página. Tarefas salvas sem prioridade, ou com valor inválido, SHALL ser exibidas como "Média".

#### Scenario: Prioridade exibida na lista
- **WHEN** existem tarefas com prioridades "Alta", "Média" e "Baixa"
- **THEN** cada item mostra o rótulo da sua própria prioridade

#### Scenario: Prioridade mantida após recarregar
- **WHEN** o usuário cria uma tarefa com prioridade "Alta" e recarrega a página
- **THEN** a tarefa continua exibindo "Alta"

#### Scenario: Tarefa antiga sem prioridade
- **WHEN** o LocalStorage contém uma tarefa salva antes desta Change, sem o campo de prioridade
- **THEN** ela é exibida com a prioridade "Média" e nenhum erro ocorre no console

### Requirement: Cabeçalho das colunas de prioridade e status
Sempre que a lista de tarefas for exibida, a aplicação SHALL mostrar, logo abaixo dos filtros e acima da primeira tarefa, um cabeçalho com os títulos "Prioridade" e "Status", cada um alinhado à coluna do respectivo rótulo nos itens. Quando a lista não for exibida (estado vazio ou filtro sem tarefas), o cabeçalho SHALL NOT ser exibido.

#### Scenario: Cabeçalho com tarefas na lista
- **WHEN** há pelo menos uma tarefa exibida na lista
- **THEN** "Prioridade" e "Status" aparecem entre os filtros e a lista, acima dos rótulos de prioridade e de status das tarefas

#### Scenario: Sem tarefas exibidas
- **WHEN** não há tarefas, ou o filtro ativo não tem nenhuma tarefa
- **THEN** o cabeçalho não é exibido

## MODIFIED Requirements

### Requirement: Listar tarefas salvas ao carregar a página
Ao carregar a página, o sistema SHALL ler as tarefas salvas no LocalStorage e exibi-las, em ordem, na área de listagem.

#### Scenario: Página recarregada com tarefas salvas
- **WHEN** existem tarefas salvas no LocalStorage e o usuário abre ou recarrega a página
- **THEN** todas as tarefas salvas são exibidas na lista, na mesma ordem em que foram criadas

#### Scenario: Página carregada sem tarefas salvas
- **WHEN** não há tarefas salvas no LocalStorage (chave ausente ou lista vazia)
- **THEN** a área de listagem exibe o estado vazio definido na capability `estrutura-visual` (mensagem "Nenhuma tarefa criada ainda. Adicione sua primeira tarefa para começar." e botão "+ Nova tarefa"), sem erros no console

#### Scenario: Nova tarefa criada reflete imediatamente na lista
- **WHEN** uma tarefa é criada através do formulário (ver capability `criar-tarefa`)
- **THEN** ela passa a constar na listagem exibida, sem necessidade de recarregar a página
