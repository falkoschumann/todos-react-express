'use strict';

const todosRepository = require('../adapters/providers/todosRepository');
const destroyTodo = require('./destroyTodo');

jest.mock('../adapters/providers/todosRepository');

describe('Destroy todo', () => {
  beforeEach(() => {
    todosRepository.store([
      { id: 1, title: 'Taste JavaScript', completed: true },
      { id: 2, title: 'Buy Unicorn', completed: false },
    ]);
  });

  it('destroys a todo.', () => {
    const status = destroyTodo({ id: 1 });

    expect(status).toEqual({ success: true });
    const todos = todosRepository.load();
    expect(todos).toEqual([{ id: 2, title: 'Buy Unicorn', completed: false }]);
  });
});
