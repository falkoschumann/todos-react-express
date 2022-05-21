// @ts-check

import { useEffect, useRef } from 'react';
import TodoList from './TodoList';

function TodosController({ selectedTodos, onSelectTodos }) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (!firstRenderRef.current) {
      return;
    }

    firstRenderRef.current = false;
    onSelectTodos();
  }, [onSelectTodos]);

  return (
    <section className="container mx-auto">
      <header className="mt-7">
        <h1 className="font-thin text-8xl text-center text-red-700">todos</h1>
      </header>
      {selectedTodos?.todos.length ? (
        <main className="mt-5 border border-gray-100 shadow-lg">
          <TodoList todos={selectedTodos.todos} />
        </main>
      ) : null}
    </section>
  );
}

export default TodosController;
