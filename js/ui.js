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
    const item = document.createElement("li");
    item.textContent = tarefa.texto;
    lista.appendChild(item);
  });

  areaLista.appendChild(lista);
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

document.addEventListener("DOMContentLoaded", atualizarListagem);
