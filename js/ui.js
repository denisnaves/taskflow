const formulario = document.querySelector("#formulario-tarefa");
const campoTarefa = document.querySelector("#campo-tarefa");
const areaLista = document.querySelector("#area-lista");

/**
 * Revela o formulário de criação de tarefa (campo de texto + botão "+ Adicionar")
 * e atualiza a listagem para que o botão "+ Nova tarefa" deixe de ser exibido
 * (as duas telas nunca mostram, ao mesmo tempo, dois botões com a mesma
 * finalidade de criar tarefa).
 */
function revelarFormulario() {
  formulario.hidden = false;
  campoTarefa.focus();
  atualizarListagem();
}

/**
 * Renderiza a área de listagem a partir de um array de tarefas:
 * exibe o estado vazio (mensagem, com o botão "+ Nova tarefa" apenas enquanto
 * o formulário ainda não foi revelado) quando não há tarefas, ou a lista de
 * tarefas quando há pelo menos uma.
 */
function renderTarefas(tarefas) {
  while (areaLista.firstChild) {
    areaLista.removeChild(areaLista.firstChild);
  }

  if (tarefas.length === 0) {
    const mensagem = document.createElement("p");
    mensagem.textContent = "Nenhuma tarefa ainda. Adicione sua primeira tarefa para começar.";
    areaLista.appendChild(mensagem);

    if (formulario.hidden) {
      const botaoNovaTarefa = document.createElement("button");
      botaoNovaTarefa.type = "button";
      botaoNovaTarefa.id = "botao-nova-tarefa";
      botaoNovaTarefa.textContent = "+ Nova tarefa";
      botaoNovaTarefa.addEventListener("click", revelarFormulario);
      areaLista.appendChild(botaoNovaTarefa);
    }

    return;
  }

  formulario.hidden = false;

  const lista = document.createElement("ul");
  lista.id = "lista-tarefas";

  tarefas.forEach((tarefa) => {
    lista.appendChild(criarItemTarefa(tarefa));
  });

  areaLista.appendChild(lista);
}

/**
 * Cria o item (<li>) de uma tarefa com caixa de seleção (concluir/reabrir),
 * texto, status ("Pendente"/"Concluída") e botão de lixeira (excluir).
 * O id da tarefa fica em `data-id` para a delegação de eventos.
 */
function criarItemTarefa(tarefa) {
  const item = document.createElement("li");
  item.dataset.id = tarefa.id;
  item.className = "tarefa";
  if (tarefa.concluida) {
    item.classList.add("tarefa-concluida");
  }

  const caixaConclusao = document.createElement("input");
  caixaConclusao.type = "checkbox";
  caixaConclusao.className = "tarefa-conclusao";
  caixaConclusao.checked = tarefa.concluida;
  caixaConclusao.setAttribute("aria-label", "Concluir tarefa: " + tarefa.texto);

  const texto = document.createElement("span");
  texto.className = "tarefa-texto";
  texto.textContent = tarefa.texto;

  const status = document.createElement("span");
  status.className = "tarefa-status";
  status.textContent = tarefa.concluida ? "Concluída" : "Pendente";

  const botaoExcluir = document.createElement("button");
  botaoExcluir.type = "button";
  botaoExcluir.className = "tarefa-excluir";
  botaoExcluir.textContent = "🗑️";
  botaoExcluir.setAttribute("aria-label", "Excluir tarefa: " + tarefa.texto);

  item.append(caixaConclusao, texto, status, botaoExcluir);
  return item;
}

/**
 * Lê o id da tarefa a partir do item (<li>) que contém o elemento informado.
 */
function obterIdTarefa(elemento) {
  return Number(elemento.closest("li").dataset.id);
}

/**
 * Devolve o foco do teclado à caixa de seleção da tarefa com o id informado
 * (a lista é recriada a cada alteração, o que faria o foco ir para o <body>).
 */
function focarConclusaoTarefa(id) {
  const caixa = areaLista.querySelector('li[data-id="' + id + '"] .tarefa-conclusao');
  if (caixa) {
    caixa.focus();
  }
}

/**
 * Delegação de eventos (change): marcar/desmarcar a caixa de seleção alterna
 * o status da tarefa e redesenha a lista.
 */
function handleAlternarConclusao(event) {
  if (!event.target.matches(".tarefa-conclusao")) {
    return;
  }

  const id = obterIdTarefa(event.target);
  alternarConclusaoTarefa(id);
  atualizarListagem();
  focarConclusaoTarefa(id);
}

/**
 * Delegação de eventos (click): o botão de lixeira exclui a tarefa e redesenha
 * a lista (exibindo o estado vazio se era a última).
 */
function handleExcluir(event) {
  const botao = event.target.closest(".tarefa-excluir");
  if (!botao) {
    return;
  }

  const item = botao.closest("li");
  const vizinho = item.nextElementSibling || item.previousElementSibling;

  excluirTarefa(obterIdTarefa(botao));
  atualizarListagem();

  if (vizinho) {
    focarConclusaoTarefa(Number(vizinho.dataset.id));
  } else {
    campoTarefa.focus();
  }
}

/**
 * Carrega as tarefas salvas e atualiza a área de listagem.
 */
function atualizarListagem() {
  const tarefas = carregarTarefas();
  renderTarefas(tarefas);
}

/**
 * Lida com a submissão do formulário: valida o texto, salva a tarefa,
 * limpa o campo e atualiza a listagem.
 */
function handleSubmit(event) {
  event.preventDefault();

  const texto = campoTarefa.value.trim();
  if (!texto) {
    return;
  }

  salvarTarefa(texto);
  campoTarefa.value = "";
  atualizarListagem();
}

formulario.addEventListener("submit", handleSubmit);
areaLista.addEventListener("change", handleAlternarConclusao);
areaLista.addEventListener("click", handleExcluir);

document.addEventListener("DOMContentLoaded", atualizarListagem);
