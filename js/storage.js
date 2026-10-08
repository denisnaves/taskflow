const STORAGE_KEY = "taskflow.tasks";
const PRIORIDADES = ["alta", "media", "baixa"];
const PRIORIDADE_PADRAO = "media";

/**
 * Carrega a lista de tarefas salva no LocalStorage.
 * Retorna um array vazio se não houver dados ou se os dados estiverem corrompidos.
 * Tarefas salvas sem o campo `concluida` são tratadas como pendentes e, sem
 * prioridade válida, como de prioridade "media".
 */
function carregarTarefas() {
  const dados = localStorage.getItem(STORAGE_KEY);

  if (!dados) {
    return [];
  }

  try {
    return JSON.parse(dados).map((tarefa) => ({
      ...tarefa,
      concluida: Boolean(tarefa.concluida),
      prioridade: PRIORIDADES.includes(tarefa.prioridade) ? tarefa.prioridade : PRIORIDADE_PADRAO,
    }));
  } catch (erro) {
    return [];
  }
}

/**
 * Grava a lista completa de tarefas no LocalStorage.
 */
function salvarTarefas(tarefas) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
}

/**
 * Salva uma nova tarefa (pendente) no LocalStorage a partir do texto e da prioridade informados,
 * adicionando-a à lista existente. O id é sempre maior que os já existentes,
 * pois concluir/excluir operam por id. Retorna o item salvo.
 */
function salvarTarefa(texto, prioridade) {
  const tarefas = carregarTarefas();
  const maiorId = tarefas.reduce((maior, tarefa) => Math.max(maior, tarefa.id), 0);
  const novaTarefa = { id: Math.max(Date.now(), maiorId + 1), texto: texto, concluida: false, prioridade: prioridade };
  tarefas.push(novaTarefa);
  salvarTarefas(tarefas);
  return novaTarefa;
}

/**
 * Inverte o status (pendente/concluída) da tarefa com o id informado.
 * As demais tarefas não são alteradas.
 */
function alternarConclusaoTarefa(id) {
  const tarefas = carregarTarefas();
  const tarefa = tarefas.find((item) => item.id === id);

  if (!tarefa) {
    return;
  }

  tarefa.concluida = !tarefa.concluida;
  salvarTarefas(tarefas);
}

/**
 * Remove do LocalStorage a tarefa com o id informado.
 * As demais tarefas não são alteradas.
 */
function excluirTarefa(id) {
  const tarefas = carregarTarefas().filter((item) => item.id !== id);
  salvarTarefas(tarefas);
}
