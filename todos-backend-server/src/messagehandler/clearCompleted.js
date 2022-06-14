'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function clearCompleted() {
  let todos = todosRepository.load();
  todos = doClearCompleted(todos);
  todosRepository.store(todos);
  return { success: true };
}

function doClearCompleted(todos) {
  return todos.filter((todo) => !todo.completed);
}

module.exports = clearCompleted;
