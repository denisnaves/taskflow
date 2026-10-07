# Proposal

## Why

O TaskFlow já funciona, mas a aparência é básica. Esta Change dá uma identidade visual mais amigável: marca "Task" azul + "Flow" preto, fundo cinza claro, itens em cartões brancos arredondados e filtros/status com cores amigáveis.

## What Changes

- **Revisão de filtros e persistência**: os filtros Todas, Pendentes e Concluídas (Change 03) e a persistência das tarefas no LocalStorage (Changes 01 e 02) já existem e atendem às specs `filtrar-tarefas`, `listar-tarefas`, `concluir-tarefa` e `criar-tarefa`. Esta Change **não os reimplementa**; apenas os valida (criar tarefa → atualizar a página → continua; concluir → conferir filtros).
- **Marca**: o título exibe "Task" em azul e "Flow" em preto.
- **Fundo**: a página tem fundo cinza claro; os itens ficam em cartões brancos arredondados com sombra suave.
- **Botões** de ação ("+ Adicionar", "+ Nova tarefa"): fundo azul, texto branco.
- **Filtros e status coloridos**: Pendentes com fundo laranja claro e texto laranja em negrito; Concluídas com fundo verde claro e texto verde em negrito; Todas com fundo azul claro e texto azul em negrito. O status "Pendente"/"Concluída" em cada item usa as mesmas cores. O filtro ativo é destacado por uma borda na cor do filtro.
- **Sem imagem de prancheta**: nenhuma tela, nem o estado vazio, exibe imagem ou ícone de prancheta.

Fora do escopo: modo escuro, animações, novas funcionalidades, mudança de comportamento.

## Capabilities

### New Capabilities
- `identidade-visual`: aparência (cores, marca, cartões, filtros e status coloridos).

### Modified Capabilities

## Impact

- `index.html`: o `<h1>` passa a ter dois `<span>` (Task / Flow).
- `css/style.css`: novo visual. Sem mudança em `js/`.
