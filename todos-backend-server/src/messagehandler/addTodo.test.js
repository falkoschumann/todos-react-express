'use strict';

const todosRepository = require('../adapters/providers/todosRepository');
const addTodo = require('./addTodo');

jest.mock('../adapters/providers/todosRepository');

describe('Add todo', () => {
  beforeEach(() => {
    todosRepository.store([{ id: 1, title: 'Taste JavaScript', completed: true }]);
  });

  it('saves new todo.', async () => {
    const status = addTodo({ title: 'Buy a Unicorn' });

    expect(status).toEqual({ success: true });
    const todos = todosRepository.load();
    expect(todos).toEqual([
      { id: 1, title: 'Taste JavaScript', completed: true },
      { id: 2, title: 'Buy a Unicorn', completed: false },
    ]);
  });

  it('does nothing if title is empty.', async () => {
    const status = addTodo({ title: '' });

    expect(status).toEqual({ success: true });
    const todos = todosRepository.load();
    expect(todos).toEqual([{ id: 1, title: 'Taste JavaScript', completed: true }]);
  });
});
