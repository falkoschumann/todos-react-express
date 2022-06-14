'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function toggleAll({ checked }) {
  let todos = todosRepository.load();
  todos = doToggleAll(todos, checked);
  todosRepository.store(todos);
  return { success: true };
}

function doToggleAll(todos, checked) {
  return todos.map((todo) => ({ ...todo, completed: checked }));
}

module.exports = toggleAll;
