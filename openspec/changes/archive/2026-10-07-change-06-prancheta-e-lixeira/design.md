# Design

## Context

Ver proposal.md. O projeto não aceita bibliotecas nem estilos/JS inline.

## Decisions

- Ilustrações como arquivos SVG locais em `img/` (`prancheta.svg`, `lixeira.svg`), desenhados à mão: sem dependência externa nem direitos autorais.
- Prancheta: `<img>` criado em `renderTarefas` (`js/ui.js`) acima da mensagem, no ramo "sem tarefas", com `alt=""` (decorativa; a mensagem já diz o necessário).
- Lixeira: o botão deixa de ter o texto 🗑️ e recebe o ícone como `background-image` no CSS; o `aria-label` existente continua dando o nome acessível. Como SVG em `background-image` não muda de cor por CSS, o vermelho no hover usa um segundo arquivo `img/lixeira-vermelha.svg`.
- Sem mudança de dados nem de comportamento.
