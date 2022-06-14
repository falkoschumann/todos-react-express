'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function destroyTodo({ id }) {
  let todos = todosRepository.load();
  todos = doDestroyTodo(todos, id);
  todosRepository.store(todos);
  return { success: true };
}

function doDestroyTodo(todos, id) {
  return todos.filter((todo) => todo.id !== id);
}

module.exports = destroyTodo;
