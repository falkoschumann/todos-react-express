'use strict';

const todosRepository = require('../adapters/providers/todosRepository');
const saveTodo = require('./saveTodo');

jest.mock('../adapters/providers/todosRepository');

describe('Save todo', () => {
  beforeEach(() => {
    todosRepository.store([
      { id: 1, title: 'Taste JavaScript', completed: true },
      { id: 2, title: 'Buy Unicorn', completed: false },
    ]);
  });

  it('changes todos title.', () => {
    const status = saveTodo({ id: 1, newTitle: 'Taste TypeScript' });

    expect(status).toEqual({ success: true });
    const todos = todosRepository.load();
    expect(todos).toEqual([
      { id: 1, title: 'Taste TypeScript', completed: true },
      { id: 2, title: 'Buy Unicorn', completed: false },
    ]);
  });

  it('destroys todo if title is empty.', () => {
    const status = saveTodo({ id: 1, newTitle: '' });

    expect(status).toEqual({ success: true });
    const todos = todosRepository.load();
    expect(todos).toEqual([{ id: 2, title: 'Buy Unicorn', completed: false }]);
  });
});
