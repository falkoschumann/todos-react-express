'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function destroyTodo({ id }) {
  function removeTodoFromList() {
    todos = todos.filter((todo) => todo.id !== id);
  }

  let todos = todosRepository.load();
  removeTodoFromList();
  todosRepository.store(todos);
  return { success: true };
}

module.exports = destroyTodo;
