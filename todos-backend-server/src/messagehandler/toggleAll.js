'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function toggleAll({ checked }) {
  function updateCompleted() {
    todos = todos.map((todo) => ({ ...todo, completed: checked }));
  }

  let todos = todosRepository.load();
  updateCompleted();
  todosRepository.store(todos);
  return { success: true };
}

module.exports = toggleAll;
