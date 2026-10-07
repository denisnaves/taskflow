# Proposal

## Why

O estado vazio (primeira tela e a tela seguinte, com o formulário revelado) fica sem personalidade, e o emoji da lixeira destoa da identidade visual. Uma ilustração de prancheta torna o início mais amigável, e um ícone de lixeira próprio combina melhor com o resto.

## What Changes

- Exibir uma ilustração de prancheta acima da mensagem "Nenhuma tarefa ainda..." sempre que não houver tarefas, tanto na primeira tela (com "+ Nova tarefa") quanto na segunda (com o formulário revelado).
- Trocar o emoji da lixeira por um ícone SVG mais elegante (cinza, vermelho ao passar o mouse).
- **Revoga** o requisito "Sem imagem de prancheta" da Change 05, que passa a contradizer o pedido.
- A prancheta é uma ilustração SVG desenhada para o projeto (arquivo local), não uma fotografia.

- O botão "+ Nova tarefa" fica cerca de 10% maior e recebe o foco destacado na primeira tela.
- Cada filtro exibe o total de tarefas que contém: "Todas (N)", "Pendentes (N)", "Concluídas (N)".

Fora do escopo: ícone da engrenagem, qualquer mudança de comportamento.

## Capabilities

### Modified Capabilities
- `filtrar-tarefas`: totalizador em cada filtro.
- `identidade-visual`: remove "Sem imagem de prancheta"; adiciona "Ilustração de prancheta no estado vazio" e "Ícone de lixeira".

## Impact

- Novos arquivos `img/prancheta.svg` e `img/lixeira.svg`.
- `js/ui.js` (cria a imagem no estado vazio e remove o emoji da lixeira) e `css/style.css`.
