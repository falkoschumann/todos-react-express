import { Route, Routes } from 'react-router-dom';
import { useCallback, useState } from 'react';

import TodosAPI from './adapters/providers/TodosAPI';
import TodosController from './adapters/portals/TodosController';

function App() {
  const [selectedTodos, setSelectedTodos] = useState();

  const handleAddTodo = useCallback(async (command) => {
    const status = await TodosAPI.addTodo(command);
    if (!status.success) {
      console.error(status.errorMessage);
    }
    const result = await TodosAPI.selectTodos();
    setSelectedTodos(result);
  }, []);

  const handleSelectTodos = useCallback(async () => {
    const result = await TodosAPI.selectTodos();
    setSelectedTodos(result);
  }, []);

  const handleToggleTodo = useCallback(async (command) => {
    const status = await TodosAPI.toggleTodo(command);
    if (!status.success) {
      console.error(status.errorMessage);
    }
    const result = await TodosAPI.selectTodos();
    setSelectedTodos(result);
  }, []);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <TodosController
            selectedTodos={selectedTodos}
            onAddTodo={handleAddTodo}
            onSelectTodos={handleSelectTodos}
            onToggleTodo={handleToggleTodo}
          />
        }
      />
    </Routes>
  );
}

export default App;
