'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function toggleAll({ checked }) {
  function doToggleAll() {
    todos = todos.map((todo) => ({ ...todo, completed: checked }));
  }

  let todos = todosRepository.load();
  doToggleAll();
  todosRepository.store(todos);
  return { success: true };
}

module.exports = toggleAll;
