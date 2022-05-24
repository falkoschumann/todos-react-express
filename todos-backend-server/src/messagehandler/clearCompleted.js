'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function clearCompleted() {
  function toggleTodoInList() {
    todos = todos.filter((todo) => !todo.completed);
  }

  let todos = todosRepository.load();
  toggleTodoInList();
  todosRepository.store(todos);
  return { success: true };
}

module.exports = clearCompleted;
