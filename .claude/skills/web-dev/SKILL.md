---
name: web-dev
description: Use esta skill sempre que for escrever, revisar ou alterar código do TaskFlow (HTML, CSS ou JavaScript) — organização de arquivos, manipulação do DOM, eventos, uso do LocalStorage, separação de responsabilidades entre HTML/CSS/JS, e manutenção da simplicidade do código. Consulte antes de criar ou editar qualquer arquivo do projeto.
---

# Desenvolvimento Web - TaskFlow

Esta skill orienta como escrever código neste projeto, que usa apenas **HTML, CSS, JavaScript puro e LocalStorage** (ver `CLAUDE.md` para as regras permanentes do projeto). Consulte-a antes de criar ou editar qualquer arquivo.

## 1. Organização de arquivos

- Estrutura de pastas simples e previsível:
  ```
  /
  ├── index.html
  ├── css/
  │   └── style.css
  └── js/
      └── app.js   (ou múltiplos arquivos por responsabilidade, ex.: storage.js, tasks.js, ui.js)
  ```
- Um arquivo HTML referencia seus CSS/JS via `<link>` e `<script>`, nunca inline.
- Nomes de arquivos e pastas em minúsculas, descritivos do conteúdo (`tasks.js`, não `script2.js`).
- Dividir JavaScript em múltiplos arquivos apenas quando isso reduzir complexidade — não criar módulos ou pastas extras "por padrão".

## 2. Manipulação do DOM

- Selecionar elementos com `document.querySelector` / `querySelectorAll`, guardando referências em variáveis quando reutilizadas.
- Criar elementos com `document.createElement` + `textContent`/atributos; evitar `innerHTML` com conteúdo dinâmico vindo de dados do usuário (risco de XSS) — usar `innerHTML` só para HTML estático e confiável.
- Atualizar o DOM de forma previsível: funções pequenas que renderizam um estado conhecido (ex.: `renderTasks(lista)`), em vez de manipulações espalhadas pelo código.
- Evitar manipular o DOM diretamente dentro de callbacks de eventos complexos; preferir separar "atualizar dados" de "renderizar na tela".

## 3. Eventos

- Sempre `addEventListener`, nunca atributos inline (`onclick="..."`) no HTML.
- Usar delegação de eventos (listener no elemento pai, verificando `event.target`) para listas de itens gerados dinamicamente, em vez de registrar um listener por item.
- Nomear funções de callback de forma clara (`handleAddTask`, `handleDeleteClick`) em vez de funções anônimas grandes, quando a lógica tiver mais de uma linha.
- Remover listeners (`removeEventListener`) quando elementos forem recriados, se necessário, para evitar duplicação de eventos.

## 4. LocalStorage

- Sempre serializar/deserializar com `JSON.stringify` / `JSON.parse`; nunca salvar objetos diretamente.
- Centralizar o acesso ao LocalStorage em funções próprias (ex.: `salvarTarefas(lista)`, `carregarTarefas()`), nunca espalhar `localStorage.getItem`/`setItem` pelo código.
- Usar uma chave constante e descritiva (ex.: `const STORAGE_KEY = "taskflow.tasks"`), nunca strings literais repetidas.
- Tratar o caso de dado ausente ou inválido (`JSON.parse` falhando, chave inexistente) retornando um valor padrão seguro (ex.: array vazio), sem deixar o app quebrar.

## 5. Separação de responsabilidades

- HTML define estrutura; CSS define aparência; JavaScript define comportamento — nunca misturar (sem `style=""` nem `onclick=""` inline).
- Dentro do JavaScript, separar camadas quando fizer sentido:
  - **Dados/persistência** (ler e salvar no LocalStorage);
  - **Lógica/estado** (adicionar, remover, marcar tarefa como concluída);
  - **Interface** (renderizar elementos, ler inputs, responder a eventos).
- Cada função deve ter uma responsabilidade clara e um nome que a descreva; evitar funções que façam "tudo" (buscar dado, validar, renderizar e salvar na mesma função).

## 6. Simplicidade

- Preferir sempre a solução mais direta e legível à mais genérica ou "escalável".
- Não introduzir padrões de projeto, abstrações, classes ou módulos complexos para um problema simples.
- Não adicionar frameworks, bibliotecas, bundlers ou build steps — o projeto deve rodar abrindo o `index.html` diretamente.
- Não implementar funcionalidades, validações ou opções que não tenham sido pedidas explicitamente (ver regra correspondente no `CLAUDE.md`).
