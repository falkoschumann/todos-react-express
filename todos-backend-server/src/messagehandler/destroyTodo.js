'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function destroyTodo({ id }) {
  function doDestroyTodo() {
    todos = todos.filter((todo) => todo.id !== id);
  }

  let todos = todosRepository.load();
  doDestroyTodo();
  todosRepository.store(todos);
  return { success: true };
}

module.exports = destroyTodo;
