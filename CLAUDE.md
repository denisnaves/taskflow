# TaskFlow

Orientações permanentes para este projeto. Siga-as em toda tarefa de desenvolvimento, independentemente do que for pedido em cada sessão.

## Tecnologias

- **HTML** para estrutura e conteúdo.
- **CSS** para estilo e layout.
- **JavaScript** puro (vanilla) para comportamento e lógica.
- **LocalStorage** como mecanismo de persistência de dados no navegador.

Nenhuma outra tecnologia, linguagem ou serviço deve ser introduzido sem solicitação explícita.

## Separação entre HTML, CSS e JavaScript

- Estrutura (HTML), apresentação (CSS) e comportamento (JavaScript) devem ficar em arquivos separados (`.html`, `.css`, `.js`).
- Não usar estilos inline (`style="..."`) nem JavaScript inline (`onclick="..."`, `<script>` embutido no meio do HTML) fora de casos excepcionais e justificados.
- Cada camada deve poder ser lida e mantida isoladamente das demais.

## Simplicidade

- Priorizar sempre a solução mais simples que atenda ao que foi pedido.
- Evitar abstrações, camadas ou configurações adicionais que não sejam estritamente necessárias.
- Preferir código direto e legível a soluções "espertas" ou genéricas demais.

## Ausência de frameworks

- Não utilizar frameworks ou bibliotecas externas (ex.: React, Vue, Angular, jQuery, Bootstrap, Tailwind, etc.).
- O projeto deve funcionar apenas com HTML, CSS e JavaScript nativos, sem dependências externas, bundlers ou gerenciadores de pacote.

## Não implementar funcionalidades fora das especificações

- Implementar exatamente o que foi especificado — nem mais, nem menos.
- Não adicionar funcionalidades, telas, validações ou melhorias que não tenham sido explicitamente solicitadas, mesmo que pareçam úteis.
- Em caso de dúvida sobre o escopo de uma funcionalidade, perguntar antes de implementar, em vez de assumir ou expandir o pedido.

## Fluxo de trabalho: Change → Commit → GitHub

Toda unidade lógica de trabalho no projeto (uma funcionalidade, uma correção de bug, qualquer alteração de comportamento) segue obrigatoriamente este pipeline, nesta ordem:

**CHANGE → IMPLEMENTAÇÃO → VALIDAÇÃO → ARCHIVE → COMMIT → GITHUB**

1. **CHANGE**: criar a Change no OpenSpec (`openspec-propose`), com proposal, specs delta e tasks, antes de escrever qualquer código.
2. **IMPLEMENTAÇÃO**: implementar as tarefas da Change (`openspec-apply-change`), seguindo o CLAUDE.md e a Skill `web-dev`.
3. **VALIDAÇÃO**: testar o comportamento implementado (manualmente e/ou via `openspec validate --strict`) antes de considerar a Change concluída.
4. **ARCHIVE**: arquivar a Change no OpenSpec (`openspec-archive-change`), sincronizando as specs principais em `openspec/specs/`.
5. **COMMIT**: registrar um commit git com a unidade de trabalho concluída (código + artefatos do OpenSpec já arquivados).
6. **GITHUB**: enviar (`git push`) o commit ao repositório remoto no GitHub.

Nenhuma etapa deve ser pulada ou feita fora de ordem. Uma correção de bug encontrada após uma Change já arquivada também deve passar por esse pipeline como sua própria unidade lógica (sua própria Change), em vez de ser aplicada direto no código ou nas specs principais.
