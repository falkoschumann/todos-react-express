import APIUtils from './APIUtils';

const baseUrl = '/api/todos';

async function addTodo({ title }) {
  return APIUtils.postJson(`${baseUrl}/add-todo`, { title });
}

async function clearCompleted() {
  return APIUtils.postJson(`${baseUrl}/clear-completed`);
}

async function destroyTodo({ id }) {
  return APIUtils.postJson(`${baseUrl}/destroy-todo`, { id });
}

async function saveTodo({ id, title }) {
  return APIUtils.postJson(`${baseUrl}/save-todo`, { id, title });
}

async function selectTodos() {
  return APIUtils.getJson(`${baseUrl}/select-todos`);
}

async function toggleAll({ checked }) {
  return APIUtils.postJson(`${baseUrl}/toggle-all`, { checked });
}

async function toggleTodo({ id }) {
  return APIUtils.postJson(`${baseUrl}/toggle-todo`, { id });
}

const TodosAPI = {
  addTodo,
  clearCompleted,
  destroyTodo,
  saveTodo,
  selectTodos,
  toggleAll,
  toggleTodo,
};

export default TodosAPI;
