'use strict';

const todosRepository = require('../adapters/providers/todosRepository');

function addTodo({ title }) {
  function doAddTodo() {
    let id = todos.map((todo) => todo.id).reduce((id1, id2) => Math.max(id1, id2), 0);
    id++;
    const newTodo = { id, title, completed: false };
    todos.push(newTodo);
  }

  if (!title) {
    return { success: true };
  }

  let todos = todosRepository.load();
  doAddTodo();
  todosRepository.store(todos);

  return { success: true };
}

module.exports = addTodo;
