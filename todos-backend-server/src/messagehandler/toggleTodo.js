'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function toggleTodo({ id }) {
  function doToggleTodo() {
    todos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  }

  let todos = todosRepository.load();
  doToggleTodo();
  todosRepository.store(todos);
  return { success: true };
}

module.exports = toggleTodo;
