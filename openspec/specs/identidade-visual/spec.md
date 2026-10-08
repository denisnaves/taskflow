# identidade-visual Specification

## Purpose
Define a identidade visual do TaskFlow: marca bicolor, fundo claro, itens em cartões arredondados e cores amigáveis para filtros e status, sem alterar o comportamento da aplicação.

## Requirements

### Requirement: Marca TaskFlow bicolor
O título da aplicação SHALL exibir "Task" em azul e "Flow" em preto, formando o texto "TaskFlow".

#### Scenario: Título exibido
- **WHEN** a página é carregada
- **THEN** o título mostra "Task" em azul seguido de "Flow" em preto

### Requirement: Fundo claro e itens em cartões brancos
A página SHALL ter fundo cinza claro, e cada tarefa SHALL ser exibida dentro de um componente arredondado de fundo branco com sombra suave, e o campo de texto do formulário SHALL ter fundo branco e cantos arredondados.

#### Scenario: Lista com tarefas
- **WHEN** existem tarefas na lista
- **THEN** o fundo da página é cinza claro e cada tarefa aparece em um cartão branco de cantos arredondados

### Requirement: Botões de ação azuis
O botão "+ Nova tarefa" SHALL ter fundo azul e texto branco. O botão de inclusão do formulário (nome acessível "Incluir") SHALL ser redondo, com fundo verde vivo e o símbolo "+" em branco.

#### Scenario: Botões visíveis
- **WHEN** o botão "+ Nova tarefa" (estado vazio) é exibido
- **THEN** ele aparece com fundo azul e texto branco

#### Scenario: Botão de inclusão
- **WHEN** o formulário de criação é exibido
- **THEN** o botão de inclusão aparece redondo, com fundo verde vivo e o símbolo "+" em branco

### Requirement: Filtros e status coloridos
Os status das tarefas SHALL usar cores com fundo claro e texto escuro em negrito: "Pendente" em vermelho e "Concluída" em verde. Os filtros inativos SHALL ter aparência neutra (fundo branco e texto cinza escuro). O filtro ativo SHALL ser destacado por preenchimento sólido na sua cor, com texto branco em negrito: Todas em azul, Pendentes em vermelho e Concluídas em verde.

#### Scenario: Filtros exibidos
- **WHEN** a barra de filtros é exibida
- **THEN** "Todas", "Pendentes" e "Concluídas" aparecem com aspecto neutro, exceto o filtro ativo, que aparece preenchido na sua cor

#### Scenario: Filtro ativo preenchido
- **WHEN** a barra de filtros é exibida com um filtro ativo
- **THEN** o filtro ativo aparece preenchido na sua cor (azul, vermelho ou verde) com texto branco em negrito
- **AND** os demais filtros aparecem neutros, em branco

#### Scenario: Troca de filtro
- **WHEN** o usuário clica em outro filtro
- **THEN** o novo filtro passa a ser exibido preenchido e o anterior volta ao aspecto neutro

#### Scenario: Status de uma tarefa
- **WHEN** uma tarefa pendente e uma concluída são exibidas
- **THEN** o status "Pendente" aparece em vermelho em negrito e o status "Concluída" em verde em negrito

### Requirement: Ilustração de prancheta no estado vazio
Sempre que não houver nenhuma tarefa (tela inicial e tela com o formulário revelado), a aplicação SHALL exibir uma ilustração de prancheta acima da mensagem "Nenhuma tarefa criada ainda. Adicione sua primeira tarefa para começar.". Com pelo menos uma tarefa, a ilustração SHALL NOT ser exibida.

#### Scenario: Primeira tela
- **WHEN** não há tarefas e o formulário ainda não foi revelado
- **THEN** a ilustração de prancheta, a mensagem e o botão "+ Nova tarefa" são exibidos

#### Scenario: Segunda tela
- **WHEN** não há tarefas e o usuário clicou em "+ Nova tarefa"
- **THEN** a ilustração de prancheta continua exibida junto com a mensagem, o campo de texto e o botão de inclusão

#### Scenario: Com tarefas
- **WHEN** existe pelo menos uma tarefa
- **THEN** a ilustração de prancheta não é exibida

### Requirement: Mensagem do estado vazio em duas linhas centralizadas
No estado vazio, a mensagem SHALL ser exibida em duas linhas centralizadas: "Nenhuma tarefa criada ainda." em negrito e, na linha de baixo, "Adicione sua primeira tarefa para começar.". O botão "+ Nova tarefa" SHALL ficar centralizado.

#### Scenario: Primeira tela
- **WHEN** não há tarefas e o formulário ainda não foi revelado
- **THEN** "Nenhuma tarefa criada ainda." aparece em negrito, "Adicione sua primeira tarefa para começar." aparece logo abaixo, e o botão "+ Nova tarefa" aparece centralizado

### Requirement: Botão "+ Nova tarefa" maior e com foco
O botão "+ Nova tarefa" SHALL ser exibido cerca de 10% maior que os demais botões de ação e, na primeira tela (sem tarefas e com o formulário oculto), SHALL receber o foco do teclado ao ser exibido, com um contorno de foco visível.

#### Scenario: Primeira tela
- **WHEN** não há tarefas e o formulário ainda não foi revelado
- **THEN** o botão "+ Nova tarefa" aparece com o foco destacado por um contorno visível

### Requirement: Ícone de lixeira
O botão de excluir de cada tarefa SHALL exibir um ícone de lixeira (imagem, não emoji), em cinza, que fica vermelho e ganha um fundo vermelho suave ao passar o mouse ou receber o foco do teclado, mantendo o nome acessível "Excluir tarefa: <texto>".

#### Scenario: Lixeira na tarefa
- **WHEN** uma tarefa é exibida
- **THEN** o botão de excluir mostra o ícone de lixeira em cinza e, ao passar o mouse ou receber o foco do teclado, em vermelho sobre um fundo vermelho suave

### Requirement: Contraste dos textos coloridos
Os textos exibidos sobre fundos coloridos SHALL ter taxa de contraste de pelo menos 4,5:1 com o fundo (WCAG AA). Nos rótulos de fundo claro (prioridade e status na lista) e nos filtros inativos, o texto SHALL usar um tom escuro; nos itens de fundo sólido (filtros ativos e pílulas de prioridade do formulário), o texto SHALL ser branco, exceto na prioridade Média (amarela), cujo texto SHALL ser um tom bem escuro.

#### Scenario: Rótulos legíveis
- **WHEN** uma tarefa e os filtros são exibidos
- **THEN** os rótulos de prioridade ("Baixa", "Média", "Alta") e de status ("Pendente", "Concluída") da lista, os filtros e as pílulas de prioridade do formulário têm contraste mínimo de 4,5:1 com o fundo

### Requirement: Botão de configuração em tamanho adequado
O botão de configuração (engrenagem) SHALL ser exibido maior que o texto ao redor, com área de clique com espaçamento interno e afastado das bordas do cabeçalho, sem produzir nenhum efeito ao ser clicado.

#### Scenario: Botão de configuração
- **WHEN** a página é carregada
- **THEN** a engrenagem aparece com tamanho proporcional ao título, com área de clique confortável

### Requirement: Painéis translúcidos para formulário, filtros e lista
O formulário de criação, os filtros (status e prioridade) e a lista de tarefas (com o cabeçalho "Prioridade" / "Status") SHALL ser exibidos, cada grupo dentro do seu próprio painel de cantos arredondados, com o mesmo fundo cinza claro translúcido e borda suave, para indicar que são seções distintas. Os painéis dos filtros e da lista SHALL NOT ser exibidos quando não há tarefas, e o painel do formulário SHALL ser exibido apenas quando o formulário estiver visível.

#### Scenario: Painéis com tarefas
- **WHEN** existe pelo menos uma tarefa
- **THEN** o formulário, os filtros e a lista aparecem cada um dentro de um painel arredondado, todos com o mesmo fundo cinza claro translúcido

#### Scenario: Sem tarefas
- **WHEN** não há tarefas
- **THEN** nenhum painel de filtros nem de lista é exibido, e o painel do formulário só aparece depois de "+ Nova tarefa" ser clicado

### Requirement: Título em cada painel
Cada painel SHALL exibir o nome da sua seção sobre a borda superior, no canto esquerdo: "Incluir" no painel do formulário de criação, "Filtro" no painel dos filtros e "Listagem" no painel da lista de tarefas. Os títulos SHALL aparecer somente quando o respectivo painel for exibido.

#### Scenario: Títulos dos painéis
- **WHEN** o formulário, os filtros e a lista de tarefas são exibidos
- **THEN** o painel do formulário mostra "Incluir", o painel dos filtros mostra "Filtro" e o painel da lista mostra "Listagem", cada título sobre a borda superior, no canto esquerdo do painel

#### Scenario: Sem tarefas
- **WHEN** não há tarefas
- **THEN** nenhum título "Filtro" nem "Listagem" é exibido, e o título "Incluir" só aparece com o formulário visível
