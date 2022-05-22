'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function selectTodos() {
  const todos = todosRepository.load();
  return { todos };
}

module.exports = selectTodos;
