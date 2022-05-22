import { useLocation } from 'react-router-dom';

import { Filter } from './utils';
import Footer from './Footer';
import TodoItem from './TodoItem';
import { useOnLoad } from './hooks';

function TodosController({ selectedTodos, onSelectTodos }) {
  useOnLoad(onSelectTodos);
  const { shownTodos, activeCount, filter } = useProjection(selectedTodos?.todos);

  return (
    <section className="container mx-auto">
      <header className="mt-7">
        <h1 className="font-thin text-8xl text-center text-red-700">todos</h1>
      </header>
      {selectedTodos?.todos.length ? (
        <main className="mt-5 border border-gray-100 shadow-lg">
          <ul>
            {shownTodos.map((t) => (
              <TodoItem key={t.id} todo={t} />
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
