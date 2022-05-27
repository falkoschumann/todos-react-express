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

  const handleClearCompleted = useCallback(async (command) => {
    const status = await TodosAPI.clearCompleted(command);
    if (!status.success) {
      console.log(status.errorMessage);
    }
    const result = await TodosAPI.selectTodos();
    setSelectedTodos(result);
  }, []);

  const handleDestroy = useCallback(async (command) => {
    const status = await TodosAPI.destroyTodo(command);
    if (!status.success) {
      console.log(status.errorMessage);
    }
    const result = await TodosAPI.selectTodos();
    setSelectedTodos(result);
  }, []);

  const handleSaveTodo = useCallback(async (command) => {
    const status = await TodosAPI.saveTodo(command);
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

  const handleToggleAll = useCallback(async (command) => {
    const status = await TodosAPI.toggleAll(command);
    if (!status.success) {
      console.error(status.errorMessage);
    }
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
            onClearCompleted={handleClearCompleted}
            onDestroy={handleDestroy}
            onSaveTodo={handleSaveTodo}
            onSelectTodos={handleSelectTodos}
            onToggleAll={handleToggleAll}
            onToggleTodo={handleToggleTodo}
          />
        }
      />
    </Routes>
  );
}

export default App;
