import { useLocation } from 'react-router-dom';

import { Filter } from './utils';
import Footer from './Footer';
import TodoItem from './TodoItem';
import { useOnLoad } from './hooks';
import { useState } from 'react';

function TodosController({ selectedTodos, onAddTodo, onDestroy, onSelectTodos, onToggleTodo }) {
  useOnLoad(onSelectTodos);
  const { shownTodos, activeCount, filter } = useProjection(selectedTodos?.todos);

  const [newTodo, setNewTodo] = useState('');

  function handleChange(event) {
    setNewTodo(event.target.value);
  }

  function handleNewTodoKeyDown(event) {
    if (event.code !== 'Enter') {
      return;
    }

    event.preventDefault();
    const title = newTodo.trim();
    if (title) {
      setNewTodo('');
      onAddTodo({ title });
    }
  }

  return (
    <section className="container mx-auto">
      <header className="mt-7">
        <h1 className="mb-5 font-thin text-8xl text-center text-red-700">todos</h1>
        <input
          className="block w-full pl-16 pr-3 py-4 font-light text-2xl placeholder:italic placeholder:text-gray-400 bg-white border border-gray-100 shadow-lg"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodo}
          onChange={handleChange}
          onKeyDown={handleNewTodoKeyDown}
        />
      </header>
      {selectedTodos?.todos.length ? (
        <main className="border border-gray-100 shadow-lg">
          <ul>
            {shownTodos.map((t) => (
              <TodoItem
                key={t.id}
                todo={t}
                onDestroy={() => onDestroy({ todoId: t.id })}
                onToggle={() => onToggleTodo({ todoId: t.id })}
              />
            ))}
          </ul>
          <Footer activeCount={activeCount} filter={filter} />
        </main>
      ) : null}
    </section>
  );
}

export default TodosController;

function useProjection(todos = []) {
  const { pathname } = useLocation();
  let filter;
  let shownTodos;
  switch (pathname) {
    case '/active':
      filter = Filter.Active;
      shownTodos = todos.filter((t) => !t.completed);
      break;
    case '/completed':
      filter = Filter.Completed;
      shownTodos = todos.filter((t) => t.completed);
      break;
    default:
      filter = Filter.All;
      shownTodos = todos;
      break;
  }
  const activeCount = todos.filter((t) => !t.completed).length;
  return { shownTodos, activeCount, filter };
}
