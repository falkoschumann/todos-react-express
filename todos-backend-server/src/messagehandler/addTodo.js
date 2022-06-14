'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function addTodo({ title }) {
  let todos = todosRepository.load();
  doAddTodo(todos, title);
  todosRepository.store(todos);

  return { success: true };
}

function doAddTodo(todos, title) {
  if (!title) {
    return todos;
  }

  let id = todos.map((todo) => todo.id).reduce((id1, id2) => Math.max(id1, id2), 0);
  id++;
  const newTodo = { id, title, completed: false };
  todos.push(newTodo);
}

module.exports = addTodo;
