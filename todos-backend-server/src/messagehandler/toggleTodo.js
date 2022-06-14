'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function toggleTodo({ id }) {
  let todos = todosRepository.load();
  todos = doToggleTodo(todos, id);
  todosRepository.store(todos);
  return { success: true };
}

function doToggleTodo(todos, id) {
  return todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
}

module.exports = toggleTodo;
