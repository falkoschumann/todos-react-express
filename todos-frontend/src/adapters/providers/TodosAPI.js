import APIUtils from './APIUtils';

const baseUrl = '/api/todos';

async function addTodo({ title }) {
  return APIUtils.postJson(`${baseUrl}/add-todo`, { title });
}

async function clearCompleted() {
  return APIUtils.postJson(`${baseUrl}/clear-completed`);
}

async function destroyTodo({ todoId }) {
  return APIUtils.postJson(`${baseUrl}/destroy-todo`, { todoId });
}

async function selectTodos() {
  return APIUtils.getJson(`${baseUrl}/select-todos`);
}

async function toggleTodo({ todoId }) {
  return APIUtils.postJson(`${baseUrl}/toggle-todo`, { todoId });
}

const TodosAPI = {
  addTodo,
  clearCompleted,
  destroyTodo,
  selectTodos,
  toggleTodo,
};

export default TodosAPI;
