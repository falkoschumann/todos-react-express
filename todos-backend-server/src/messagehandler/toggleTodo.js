'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function toggleTodo({ todoId }) {
  function toggleTodoInList() {
    todos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
  }

  let todos = todosRepository.load();
  toggleTodoInList();
  todosRepository.store(todos);
  return { success: true };
}

module.exports = toggleTodo;
