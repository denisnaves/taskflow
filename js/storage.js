const STORAGE_KEY = "taskflow.tasks";

/**
 * Carrega a lista de tarefas salva no LocalStorage.
 * Retorna um array vazio se não houver dados ou se os dados estiverem corrompidos.
 */
function carregarTarefas() {
  const dados = localStorage.getItem(STORAGE_KEY);

  if (!dados) {
    return [];
  }

  try {
    return JSON.parse(dados);
  } catch (erro) {
    return [];
  }
}

/**
 * Salva uma nova tarefa no LocalStorage a partir do texto informado,
 * adicionando-a à lista existente. Retorna o item salvo.
 */
function salvarTarefa(texto) {
  const tarefas = carregarTarefas();
  const novaTarefa = { id: Date.now(), texto: texto };
  tarefas.push(novaTarefa);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tarefas));
  return novaTarefa;
}
