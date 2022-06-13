'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function saveTodo({ id, title }) {
  function doSaveTodo() {
    if (title) {
      todos = todos.map((todo) => (todo.id === id ? { ...todo, title } : todo));
    } else {
      todos = todos.filter((todo) => todo.id !== id);
    }
  }

  let todos = todosRepository.load();
  doSaveTodo();
  todosRepository.store(todos);

  return { success: true };
}

module.exports = saveTodo;
