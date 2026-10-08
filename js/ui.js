const formulario = document.querySelector("#formulario-tarefa");
const campoTarefa = document.querySelector("#campo-tarefa");
const botaoIncluir = document.querySelector(".botao-incluir");
const grupoPrioridade = document.querySelector("#campo-prioridade");
const areaLista = document.querySelector("#area-lista");
const painelFiltros = document.querySelector("#painel-filtros");
const barraFiltros = document.querySelector("#filtros");
const barraFiltrosPrioridade = document.querySelector("#filtros-prioridade");

const ROTULOS_PRIORIDADE = { alta: "Alta", media: "Média", baixa: "Baixa" };

// Filtros ativos: status ("todas", "pendentes" ou "concluidas") e prioridades
// marcadas (podem ser nenhuma); não são persistidos.
let filtroAtivo = "todas";
let prioridadesAtivas = ["baixa", "media", "alta"];

/**
 * Revela o formulário de criação de tarefa (campo de texto, botão "+" de inclusão e prioridade)
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
 * quando não há tarefas, ou a lista de tarefas (filtrada), dentro de um painel
 * junto com o cabeçalho das colunas, quando há pelo menos uma.
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
    destaque.textContent = "Nenhuma tarefa criada ainda.";
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

  const painelLista = document.createElement("div");
  painelLista.className = "painel painel-lista";

  const tituloLista = document.createElement("h2");
  tituloLista.className = "titulo-painel";
  tituloLista.textContent = "Listagem";
  painelLista.appendChild(tituloLista);

  const cabecalho = document.createElement("div");
  cabecalho.className = "cabecalho-lista";
  const tituloPrioridade = document.createElement("span");
  tituloPrioridade.className = "cabecalho-prioridade";
  tituloPrioridade.textContent = "Prioridade";
  const tituloStatus = document.createElement("span");
  tituloStatus.className = "cabecalho-status";
  tituloStatus.textContent = "Status";
  cabecalho.append(tituloPrioridade, tituloStatus);
  painelLista.appendChild(cabecalho);

  const lista = document.createElement("ul");
  lista.id = "lista-tarefas";

  visiveis.forEach((tarefa) => {
    lista.appendChild(criarItemTarefa(tarefa));
  });

  painelLista.appendChild(lista);
  areaLista.appendChild(painelLista);
}

/**
 * Devolve apenas as tarefas correspondentes aos filtros ativos (status e prioridade),
 * mantendo a ordem de criação.
 */
function filtrarTarefas(tarefas) {
  return tarefas.filter((tarefa) => {
    const statusOk =
      filtroAtivo === "todas" ||
      (filtroAtivo === "pendentes" && !tarefa.concluida) ||
      (filtroAtivo === "concluidas" && tarefa.concluida);
    const prioridadeOk = prioridadesAtivas.includes(tarefa.prioridade);
    return statusOk && prioridadeOk;
  });
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
 * Delegação de eventos (click): marca ou desmarca a prioridade clicada e
 * redesenha a lista. Todas as prioridades podem ficar desmarcadas.
 */
function handleFiltroPrioridade(event) {
  const botao = event.target.closest(".filtro-prioridade");
  if (!botao) {
    return;
  }

  const prioridade = botao.dataset.prioridade;
  if (prioridadesAtivas.includes(prioridade)) {
    prioridadesAtivas = prioridadesAtivas.filter((item) => item !== prioridade);
  } else {
    prioridadesAtivas.push(prioridade);
  }
  atualizarListagem();
}

/**
 * Exibe a barra de filtros apenas quando há tarefas salvas e marca
 * como ativo o botão do filtro selecionado.
 */
function atualizarFiltros(tarefas) {
  painelFiltros.hidden = tarefas.length === 0;

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

  barraFiltrosPrioridade.querySelectorAll(".filtro-prioridade").forEach((botao) => {
    const ativo = prioridadesAtivas.includes(botao.dataset.prioridade);
    botao.classList.toggle("filtro-ativo", ativo);
    botao.setAttribute("aria-pressed", String(ativo));
  });
}

/**
 * Cria o item (<li>) de uma tarefa com caixa de seleção (concluir/reabrir),
 * texto, prioridade, status ("Pendente"/"Concluída") e botão de lixeira (excluir).
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

  const prioridade = document.createElement("span");
  prioridade.className = "tarefa-prioridade tarefa-prioridade-" + tarefa.prioridade;
  prioridade.textContent = ROTULOS_PRIORIDADE[tarefa.prioridade];

  const status = document.createElement("span");
  status.className = "tarefa-status";
  status.textContent = tarefa.concluida ? "Concluída" : "Pendente";

  const botaoExcluir = document.createElement("button");
  botaoExcluir.type = "button";
  botaoExcluir.className = "tarefa-excluir";
  botaoExcluir.setAttribute("aria-label", "Excluir tarefa: " + tarefa.texto);

  item.append(caixaConclusao, texto, prioridade, status, botaoExcluir);
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
    prioridadesAtivas = ["baixa", "media", "alta"];
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
    campoTarefa.focus();
    return;
  }

  const prioridade = formulario.querySelector('input[name="prioridade"]:checked').value;
  salvarTarefa(texto, prioridade);
  campoTarefa.value = "";
  atualizarListagem();
  campoTarefa.focus();
}

/**
 * Delegação de eventos (click): ao clicar em uma opção de prioridade com o mouse
 * ou toque (e não na legenda ou no espaço entre as opções), se já há texto
 * digitado, leva o foco ao botão de inclusão. Cliques gerados pelo teclado
 * (setas entre as opções) têm `detail` 0 e são ignorados. O foco é movido em
 * seguida (setTimeout) porque, ao clicar no rótulo da opção, o navegador ainda
 * foca o rádio depois deste evento.
 */
function handleSelecionarPrioridade(event) {
  if (event.detail === 0 || !event.target.closest(".opcao-prioridade") || !campoTarefa.value.trim()) {
    return;
  }

  setTimeout(() => botaoIncluir.focus(), 0);
}

formulario.addEventListener("submit", handleSubmit);
grupoPrioridade.addEventListener("click", handleSelecionarPrioridade);
areaLista.addEventListener("change", handleAlternarConclusao);
areaLista.addEventListener("click", handleExcluir);
barraFiltros.addEventListener("click", handleFiltro);
barraFiltrosPrioridade.addEventListener("click", handleFiltroPrioridade);

atualizarListagem();
