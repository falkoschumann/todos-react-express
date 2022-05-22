import APIUtils from './APIUtils';

const baseUrl = '/api/todos';

async function toggleTodo({ todoId }) {
  return APIUtils.postJson(`${baseUrl}/toggle-todo`, { todoId });
}

async function selectTodos() {
  return APIUtils.getJson(`${baseUrl}/select-todos`);
}

const TodosAPI = {
  toggleTodo,
  selectTodos,
};

export default TodosAPI;
