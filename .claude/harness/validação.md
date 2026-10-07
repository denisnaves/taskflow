---
description: "Harness de validação do TaskFlow: checagens, Subagents, correção e relatório PASS/FAIL"
---

Execute o Harness de validação sobre o estado atual do TaskFlow. Fluxo:

**CÓDIGO → HARNESS → VALIDAÇÕES → CORREÇÃO → NOVA VALIDAÇÃO**

Use apenas Read, Grep, Glob e Subagents. Não crie scripts nem dependências.

## 1. Checagens (marque PASS ou FAIL por área)

**Estrutura**
- Existem `index.html`, `css/style.css`, `js/storage.js`, `js/ui.js`, `img/prancheta.svg`, `img/lixeira.svg`, `img/lixeira-vermelha.svg`.
- Todo arquivo referenciado no HTML, CSS e JS (`src`, `href`, `url()`) existe.

**HTML/CSS/JS separados**
- O HTML não tem `style=`, atributos `on*=`, `<style>` nem `<script>` sem `src`.
- O JS não aplica estilo (`.style`, `cssText`).
- O DOM (`document`, `querySelector`) só aparece em `js/ui.js`; `localStorage` só em `js/storage.js`.

**JavaScript**
- Sem erro de sintaxe evidente, funções chamadas e IDs usados (`querySelector("#...")`) existem.
- Scripts carregados na ordem `storage.js` → `ui.js`.
- Sem `console.log`, `debugger` ou `innerHTML`.

**CLAUDE.md**
- Sem frameworks, bibliotecas, CDN, URLs externas, `package.json`, bundlers ou outras linguagens.
- Sem `fetch`/`XMLHttpRequest` nem serviços externos.
- Sem funcionalidade fora das specs (edição, prioridade, prazo, busca, arrastar, `alert`/`confirm`, tema escuro etc.).

**Specs**
- Cada Requirement de `openspec/specs/*/spec.md` está implementado (use o Subagent `spec-validator` para a análise completa).

**LocalStorage**
- Usa `getItem`/`setItem` com chave em constante, `JSON.parse` em `try/catch`.
- Sem `sessionStorage`, `indexedDB` ou cookies; o filtro ativo não é persistido.

## 2. Subagents (rodar em paralelo, somente leitura)

- **Code Review**: `code-reviewer` — peça `VEREDITO: PASS` ou `VEREDITO: FAIL` com achados `arquivo:linha`.
- **Spec Validation**: `spec-validator` — peça `VEREDITO: PASS` ou `VEREDITO: FAIL` com achados.

Melhorias opcionais e extras menores (foco, `aria-*`) não reprovam; só erros, violações do CLAUDE.md e requisitos ausentes.

## 3. Correção e nova validação

Caso exista qualquer erro:
- descubra a causa;
- corrija o problema (**apenas** o necessário);
- execute novamente todos os comandos (etapas 1 e 2 completas, não só a parte que falhou).

Repita até o resultado ser PASS ou até uma correção exigir decisão do usuário. Correções de código seguem o pipeline do CLAUDE.md (Change → Commit → GitHub); se a correção exigir isso, avise o usuário antes de aplicar.

## 4. Relatório final

Imprima exatamente neste formato e liste os problemas abaixo dele (ou "Nenhum problema"):

```
TASKFLOW VALIDATION
Estrutura................ PASS|FAIL
HTML/CSS/JS separados.... PASS|FAIL
JavaScript............... PASS|FAIL
CLAUDE.md................ PASS|FAIL
Specs.................... PASS|FAIL
LocalStorage............. PASS|FAIL
Code Review.............. PASS|FAIL
Spec Validation.......... PASS|FAIL
RESULTADO: PASS|FAIL
```

RESULTADO é PASS somente se todas as linhas forem PASS. Informe também o que não foi verificado (ex.: app não aberto no navegador).
