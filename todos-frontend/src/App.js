import { Route, Routes } from 'react-router-dom';
import { useCallback, useState } from 'react';

import TodosAPI from './adapters/providers/TodosAPI';
import TodosController from './adapters/portals/TodosController';

function App() {
  const [selectedTodos, setSelectedTodos] = useState();

  const handleSelectTodos = useCallback(async () => {
    const result = await TodosAPI.selectTodos();
    setSelectedTodos(result);
  }, []);

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <TodosController selectedTodos={selectedTodos} onSelectTodos={handleSelectTodos} />
        }
      />
    </Routes>
  );
}

export default App;
