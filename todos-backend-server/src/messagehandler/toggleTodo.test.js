'use strict';

const todosRepository = require('../adapters/providers/todosRepository');
const toggleTodo = require('./toggleTodo');

jest.mock('../adapters/providers/todosRepository');

describe('Toggle todos', () => {
  beforeEach(() => {
    todosRepository.store([
      { id: 1, title: 'Taste JavaScript', completed: true },
      { id: 2, title: 'Buy Unicorn', completed: false },
    ]);
  });

  it('activates a todo.', () => {
    const status = toggleTodo({ id: 1 });

    expect(status).toEqual({ success: true });
    const todos = todosRepository.load();
    expect(todos).toEqual([
      { id: 1, title: 'Taste JavaScript', completed: false },
      { id: 2, title: 'Buy Unicorn', completed: false },
    ]);
  });

  it('completes a todo.', () => {
    const status = toggleTodo({ id: 2 });

    expect(status).toEqual({ success: true });
    const todos = todosRepository.load();
    expect(todos).toEqual([
      { id: 1, title: 'Taste JavaScript', completed: true },
      { id: 2, title: 'Buy Unicorn', completed: true },
    ]);
  });
});
