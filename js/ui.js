const formulario = document.querySelector("#formulario-tarefa");
const campoTarefa = document.querySelector("#campo-tarefa");
const areaLista = document.querySelector("#area-lista");
const barraFiltros = document.querySelector("#filtros");

// Filtro ativo ("todas", "pendentes" ou "concluidas"); não é persistido.
let filtroAtivo = "todas";

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
 * exibe o estado vazio (ilustração, mensagem em duas linhas e, apenas enquanto
 * o formulário ainda não foi revelado, o botão "+ Nova tarefa" já focado)
 * quando não há tarefas, ou a lista de tarefas (filtrada) quando há pelo menos uma.
 */
function renderTarefas(tarefas) {
  while (areaLista.firstChild) {
    areaLista.removeChild(areaLista.firstChild);
  }

  if (tarefas.length === 0) {
    const ilustracao = document.createElement("img");
    ilustracao.src = "img/prancheta.svg";
    ilustracao.alt = "";
    ilustracao.className = "ilustracao-vazia";
    areaLista.appendChild(ilustracao);

    const titulo = document.createElement("p");
    titulo.className = "mensagem-vazia";
    const destaque = document.createElement("strong");
    destaque.textContent = "Nenhuma tarefa ainda.";
    titulo.appendChild(destaque);
    areaLista.appendChild(titulo);

    const instrucao = document.createElement("p");
    instrucao.className = "mensagem-vazia";
    instrucao.textContent = "Adicione sua primeira tarefa para começar.";
    areaLista.appendChild(instrucao);

    if (formulario.hidden) {
      const botaoNovaTarefa = document.createElement("button");
      botaoNovaTarefa.type = "button";
      botaoNovaTarefa.id = "botao-nova-tarefa";
      botaoNovaTarefa.textContent = "+ Nova tarefa";
      botaoNovaTarefa.addEventListener("click", revelarFormulario);
      areaLista.appendChild(botaoNovaTarefa);
      botaoNovaTarefa.focus();
    }

    return;
  }

  formulario.hidden = false;

  const visiveis = filtrarTarefas(tarefas);

  if (visiveis.length === 0) {
    const mensagem = document.createElement("p");
    mensagem.textContent = "Nenhuma tarefa neste filtro.";
    areaLista.appendChild(mensagem);
    return;
  }

  const lista = document.createElement("ul");
  lista.id = "lista-tarefas";

  visiveis.forEach((tarefa) => {
    lista.appendChild(criarItemTarefa(tarefa));
  });

  areaLista.appendChild(lista);
}

/**
 * Devolve apenas as tarefas correspondentes ao filtro ativo,
 * mantendo a ordem de criação.
 */
function filtrarTarefas(tarefas) {
  if (filtroAtivo === "pendentes") {
    return tarefas.filter((tarefa) => !tarefa.concluida);
  }
  if (filtroAtivo === "concluidas") {
    return tarefas.filter((tarefa) => tarefa.concluida);
  }
  return tarefas;
}

/**
 * Delegação de eventos (click): seleciona o filtro clicado e redesenha a lista.
 */
function handleFiltro(event) {
  const botao = event.target.closest(".filtro");
  if (!botao) {
    return;
  }

  filtroAtivo = botao.dataset.filtro;
  atualizarListagem();
}

/**
 * Exibe a barra de filtros apenas quando há tarefas salvas e marca
 * como ativo o botão do filtro selecionado.
 */
function atualizarFiltros(tarefas) {
  barraFiltros.hidden = tarefas.length === 0;

  const totais = {
    todas: tarefas.length,
    pendentes: tarefas.filter((tarefa) => !tarefa.concluida).length,
    concluidas: tarefas.filter((tarefa) => tarefa.concluida).length,
  };

  barraFiltros.querySelectorAll(".filtro").forEach((botao) => {
    botao.querySelector(".filtro-total").textContent = "(" + totais[botao.dataset.filtro] + ")";
    const ativo = botao.dataset.filtro === filtroAtivo;
    botao.classList.toggle("filtro-ativo", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });
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
 * Se a tarefa saiu da lista por causa do filtro ativo, foca o botão desse filtro.
 */
function focarConclusaoTarefa(id) {
  const caixa = areaLista.querySelector('li[data-id="' + id + '"] .tarefa-conclusao');
  if (caixa) {
    caixa.focus();
  } else {
    barraFiltros.querySelector(".filtro-ativo").focus();
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

  if (carregarTarefas().length === 0) {
    formulario.hidden = true;
    filtroAtivo = "todas";
    atualizarListagem();
    return;
  }

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
  atualizarFiltros(tarefas);
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
barraFiltros.addEventListener("click", handleFiltro);

atualizarListagem();
