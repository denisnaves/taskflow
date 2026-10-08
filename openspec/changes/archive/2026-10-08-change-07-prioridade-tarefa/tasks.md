# Tasks

## 1. Implementação

- [x] 1.1 Em `index.html`, adicionar o seletor de prioridade ao formulário
- [x] 1.2 Em `js/storage.js`, salvar `prioridade` em `salvarTarefa` e normalizar o valor em `carregarTarefas` (ausente/inválido vira "media")
- [x] 1.3 Em `js/ui.js`, ler a prioridade ao criar a tarefa e exibir o rótulo de prioridade em cada item
- [x] 1.4 Em `css/style.css`, estilizar o rótulo de prioridade (cores por nível)
- [x] 1.5 Em `index.html`, trocar o `<select>` por `<fieldset>` com radios "Baixa", "Média" (padrão) e "Alta", nesta ordem e reorganizar o formulário (layout final na tarefa 1.19)
- [x] 1.6 Em `js/ui.js`, ler a prioridade do radio marcado ao criar (a escolha permanece depois de incluir)
- [x] 1.7 Em `css/style.css`, desenhar as opções em forma de pílula coloridas em lista horizontal e alinhar os rótulos; verificar visualmente
- [x] 1.8 Em `js/ui.js`, trocar o texto do estado vazio para "Nenhuma tarefa criada ainda."
- [x] 1.9 Em `css/style.css`, mover o botão "Incluir" para uma terceira linha, abaixo dos campos e alinhado à esquerda; verificar visualmente (posição substituída pela 1.18)
- [x] 1.10 Trocar a bolinha colorida por pílula com fundo claro e texto escuro em negrito, borda na opção selecionada; verificar visualmente (estilo substituído pela 1.17)
- [x] 1.11 Em `js/ui.js` e `css/style.css`, exibir o cabeçalho "Prioridade" / "Status" abaixo dos filtros, alinhado às colunas dos itens; verificar visualmente
- [x] 1.12 Em `css/style.css`, escurecer os textos dos rótulos de prioridade, status e filtros para contraste mínimo de 4,5:1
- [x] 1.13 Em `css/style.css`, filtro ativo preenchido na sua cor (texto branco) e filtros inativos neutros; verificar visualmente
- [x] 1.14 Em `css/style.css`, engrenagem maior com área de clique e fundo vermelho suave no hover/foco da lixeira; verificar visualmente
- [x] 1.15 Em `index.html`, `js/ui.js` e `css/style.css`, adicionar a segunda linha de filtros por prioridade (Baixa, Média, Alta) de seleção múltipla, sem totalizador, podendo ficar todas desmarcadas, combinando com o filtro de status; verificar combinações e reinício ao excluir a última tarefa
- [x] 1.16 Em `index.html` e `css/style.css`, centralizar a prioridade no topo do formulário (posição substituída pela 1.17), remover o rótulo visível "Nova tarefa" (com `aria-label`), trocar a dica para "Digite uma nova tarefa" e aumentar o espaço entre "Incluir" e os filtros; verificar visualmente
- [x] 1.17 Em `index.html`, `js/ui.js` e `css/style.css`: campo com metade da largura, prioridade abaixo do campo (à esquerda), botão "Incluir", pílulas de prioridade sólidas e painéis translúcidos em volta dos filtros e da lista; verificar visualmente
- [x] 1.18 Em `index.html`, `js/ui.js` e `css/style.css`: botão de inclusão redondo, verde e com "+" grande à direita do campo; foco no campo após incluir (com ou sem texto); painel translúcido em volta do formulário; "Pendente"/"Pendentes" em vermelho e prioridade Alta em laranja (cores da Alta e da Média substituídas pela 1.21); verificar visualmente
- [x] 1.19 Em `index.html` e `css/style.css`: legenda "Selecione a Prioridade", botão "+" centralizado verticalmente entre o campo e a prioridade (à direita) e todos os painéis com o mesmo fundo cinza claro translúcido; verificar visualmente
- [x] 1.20 Em `js/ui.js`, manter a última prioridade escolhida depois de incluir a tarefa (sem restaurar "Média")
- [x] 1.21 Em `css/style.css`, prioridade Média em amarelo com texto mais escuro e Alta em vermelho (lista, pílulas do formulário e filtro de prioridade ativo); verificar visualmente
- [x] 1.22 Em `index.html`, `js/ui.js` e `css/style.css`, exibir os títulos "Incluir", "Filtro" e "Listagem" sobre a borda superior esquerda dos painéis; verificar visualmente
- [x] 1.23 Em `js/ui.js`, levar o foco ao botão de inclusão ao clicar numa prioridade com texto digitado (sem interferir na navegação por setas); verificar o foco com e sem texto

## 2. Validação

- [x] 2.1 Teste no navegador: criar tarefas nas três prioridades pelos radios, marcar/desmarcar prioridades (inclusive todas desmarcadas) combinadas com o status, recarregar, conferir o LocalStorage, testar uma tarefa antiga sem prioridade e o novo texto do estado vazio
- [x] 2.2 Rodar `code-reviewer` e `spec-validator`, corrigir problemas e rodar de novo
- [x] 2.3 Rodar `openspec validate change-07-prioridade-tarefa --strict` e verificar que passa
