# Proposal

## Why

Depois de arquivada a Change 01, testes manuais revelaram que a tela inicial (sem tarefas) exibia **dois botões com a mesma finalidade de criar tarefa** ao mesmo tempo ("+ Nova tarefa" e "+ Adicionar"), quando deveria exibir apenas um por vez, em telas distintas. A causa raiz era CSS: a regra `#formulario-tarefa { display: flex; ... }` tinha mais especificidade que a regra padrão do navegador para o atributo `hidden` (`[hidden] { display: none }`), então o formulário nunca ficava de fato oculto, independente do valor de `hidden` definido via JavaScript.

## What Changes

- CSS: adicionada a regra `#formulario-tarefa[hidden] { display: none; }`, com especificidade suficiente para realmente ocultar o formulário quando o atributo `hidden` estiver presente.
- JavaScript: `revelarFormulario()` passou a re-renderizar a listagem (`atualizarListagem()`) depois de revelar o formulário, para que o botão "+ Nova tarefa" deixe de ser desenhado assim que o formulário aparecer.
- Requisitos da capability `estrutura-visual` ("Estado vazio da listagem" e "Revelar formulário de criação") corrigidos para deixar explícita a regra: a tela nunca exibe, ao mesmo tempo, dois controles com a finalidade de criar tarefa.

Nenhuma mudança de escopo: continua sendo apenas estrutura visual, criar tarefa e listar tarefas (Change 01). Esta Change documenta e corrige um bug encontrado após o arquivamento, sem adicionar funcionalidade nova.

## Capabilities

### New Capabilities
_Nenhuma._

### Modified Capabilities
- `estrutura-visual`: requisitos "Estado vazio da listagem" e "Revelar formulário de criação" corrigidos para garantir que o botão "+ Nova tarefa" e o formulário de criação ("+ Adicionar") nunca apareçam juntos na tela.

## Impact

- `css/style.css`: nova regra `#formulario-tarefa[hidden]`.
- `js/ui.js`: `revelarFormulario()` agora chama `atualizarListagem()`.
- `openspec/specs/estrutura-visual/spec.md`: já tinha sido corrigido manualmente antes desta Change existir; esta Change formaliza e rastreia essa correção pelo processo normal do OpenSpec.
