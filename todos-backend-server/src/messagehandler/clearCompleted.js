'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function clearCompleted() {
  function doClearCompleted() {
    todos = todos.filter((todo) => !todo.completed);
  }

  let todos = todosRepository.load();
  doClearCompleted();
  todosRepository.store(todos);
  return { success: true };
}

module.exports = clearCompleted;
