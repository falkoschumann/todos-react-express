'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function saveTodo({ id, title }) {
  function updateTodoInList() {
    todos = todos.map((todo) => (todo.id === id ? { ...todo, title } : todo));
  }

  let todos = todosRepository.load();
  updateTodoInList();
  todosRepository.store(todos);

  return { success: true };
}

module.exports = saveTodo;
