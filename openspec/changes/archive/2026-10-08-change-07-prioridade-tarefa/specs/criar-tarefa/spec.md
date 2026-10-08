# Spec Delta

## ADDED Requirements

### Requirement: Selecionar a prioridade ao criar a tarefa
O formulário de nova tarefa SHALL oferecer a escolha da prioridade por um grupo horizontal de opções em forma de pílula (uma única selecionável), exibidas nesta ordem, da esquerda para a direita: "Baixa", "Média" e "Alta", cada uma com fundo redondo colorido sólido (Baixa azul, Média amarela, Alta vermelha) e o nome em negrito, em branco (na Média, em um tom bem escuro para manter a leitura sobre o amarelo), sem botão de rádio visível. A opção selecionada SHALL ser destacada por um anel ao redor da pílula. A opção "Média" SHALL vir selecionada por padrão e o usuário SHALL poder clicar em outra opção para trocar a prioridade. A tarefa criada SHALL ser salva no LocalStorage com a prioridade selecionada. Após criar a tarefa, a seleção SHALL permanecer na última opção escolhida (a opção "Média" é só o valor inicial ao abrir a página).

#### Scenario: Criação com prioridade escolhida
- **WHEN** o usuário clica na opção "Alta", digita um texto e confirma o formulário
- **THEN** a tarefa é salva no LocalStorage com a prioridade "Alta"

#### Scenario: Criação sem mexer na prioridade
- **WHEN** o usuário digita um texto e confirma sem clicar em nenhuma opção de prioridade
- **THEN** a tarefa é salva com a prioridade "Média"

#### Scenario: Trocar a prioridade antes de criar
- **WHEN** o usuário clica em "Baixa" e depois em "Alta"
- **THEN** apenas "Alta" fica selecionada

#### Scenario: Seleção permanece na última opção
- **WHEN** o usuário cria uma tarefa com prioridade "Baixa"
- **THEN** a opção "Baixa" continua selecionada, e a próxima tarefa criada sem mexer na seleção também fica com prioridade "Baixa"

#### Scenario: Valor inicial ao abrir a página
- **WHEN** a página é aberta ou recarregada
- **THEN** a opção "Média" vem selecionada

#### Scenario: Texto vazio com prioridade escolhida
- **WHEN** o usuário escolhe uma prioridade e confirma sem texto
- **THEN** nenhuma tarefa é criada

### Requirement: Disposição do formulário de criação
O formulário de criação SHALL ser exibido dentro de um painel de fundo translúcido (ver capability `identidade-visual`) e SHALL exibir, à esquerda, o campo de texto, sem rótulo visível, com a dica "Digite uma nova tarefa" e, logo abaixo dele, a seleção de prioridade, alinhada à esquerda com o campo e introduzida pelo texto "Selecione a Prioridade". À direita do campo e da seleção de prioridade, centralizado verticalmente entre os dois, SHALL ficar o botão de inclusão: redondo, de verde vivo, com o símbolo "+" grande em branco e o nome acessível "Incluir". O campo e a seleção de prioridade SHALL ocupar, juntos, cerca de metade da largura do formulário. O campo de texto SHALL manter o nome acessível "Nova tarefa". O painel do formulário SHALL ficar separado dos filtros que vêm abaixo por um espaçamento visível.

#### Scenario: Campo com metade da largura
- **WHEN** o formulário de criação é exibido
- **THEN** o campo de texto ocupa cerca de metade da largura do formulário, sem rótulo "Nova tarefa" visível, e o campo vazio mostra a dica "Digite uma nova tarefa"
- **AND** o campo continua com o nome acessível "Nova tarefa"

#### Scenario: Texto da seleção de prioridade
- **WHEN** o formulário de criação é exibido
- **THEN** o texto "Selecione a Prioridade" aparece logo abaixo do campo de texto, seguido das opções Baixa, Média e Alta, alinhados à esquerda

#### Scenario: Botão redondo centralizado verticalmente
- **WHEN** o formulário de criação é exibido
- **THEN** à direita do campo e da seleção de prioridade aparece um botão redondo, de fundo verde vivo, com o símbolo "+" grande em branco, centralizado verticalmente entre o campo de texto e a seleção de prioridade
- **AND** o botão tem o nome acessível "Incluir"

#### Scenario: Espaçamento até os filtros
- **WHEN** o formulário e os filtros são exibidos
- **THEN** há um espaçamento visível entre o painel do formulário e o painel de filtros

### Requirement: Foco no campo de texto ao incluir
Ao acionar o botão de inclusão, o foco do teclado SHALL ir para o campo de texto, tanto quando uma tarefa é criada (para digitar a próxima) quanto quando o campo está vazio (caso em que nenhuma tarefa é criada).

#### Scenario: Foco depois de incluir uma tarefa
- **WHEN** o usuário digita um texto e aciona o botão de inclusão
- **THEN** a tarefa é criada e o foco fica no campo de texto, já limpo, pronto para a próxima

#### Scenario: Foco ao incluir sem texto
- **WHEN** o usuário aciona o botão de inclusão com o campo vazio (ou só espaços)
- **THEN** nenhuma tarefa é criada e o foco volta para o campo de texto

### Requirement: Foco no botão de inclusão ao escolher a prioridade
Quando o campo de texto já contiver um texto digitado e o usuário clicar em uma das opções de prioridade, o foco do teclado SHALL ir para o botão de inclusão, para que a tarefa possa ser incluída em seguida. Com o campo de texto vazio, clicar em uma prioridade SHALL NOT mover o foco para o botão. A navegação pelo teclado entre as opções (setas) SHALL NOT mover o foco para fora do grupo de prioridades.

#### Scenario: Escolher a prioridade com texto digitado
- **WHEN** o usuário digita um texto no campo e clica em uma opção de prioridade
- **THEN** a opção é selecionada e o foco vai para o botão de inclusão

#### Scenario: Escolher a prioridade com o campo vazio
- **WHEN** o campo de texto está vazio e o usuário clica em uma opção de prioridade
- **THEN** a opção é selecionada e o foco não vai para o botão de inclusão

#### Scenario: Navegar pelas opções com o teclado
- **WHEN** o usuário usa as setas do teclado para trocar a opção de prioridade
- **THEN** o foco permanece no grupo de prioridades

## MODIFIED Requirements

### Requirement: Criar tarefa a partir do formulário
Ao confirmar o formulário (botão "Incluir" ou Enter) com um texto não vazio, o sistema SHALL criar uma nova tarefa com a prioridade selecionada, adicioná-la à lista exibida em tela e salvá-la no LocalStorage.

#### Scenario: Criação com texto válido
- **WHEN** o usuário digita um texto no campo de nova tarefa e confirma (botão "Incluir" ou Enter)
- **THEN** a tarefa aparece na lista exibida em tela e é salva no LocalStorage
- **AND** o campo de texto é limpo para permitir a criação da próxima tarefa

#### Scenario: Tentativa de criação com texto vazio
- **WHEN** o usuário confirma o formulário sem digitar nenhum texto (ou apenas espaços)
- **THEN** nenhuma tarefa é criada, nenhuma tarefa é salva no LocalStorage e a lista em tela permanece inalterada

#### Scenario: Formulário permanece visível após criar uma tarefa
- **WHEN** o usuário cria uma tarefa com sucesso
- **THEN** o campo de texto, as opções de prioridade e o botão "Incluir" continuam visíveis, permitindo criar outra tarefa sem clicar novamente em "+ Nova tarefa"
