// @ts-check

import { useCallback, useState } from 'react';
import TodosController from './adapters/portals/TodosController';
import TodosAPI from './adapters/providers/TodosAPI';

function App() {
  const [selectedTodos, setSelectedTodos] = useState();

  const handleSelectTodos = useCallback(async () => {
    const result = await TodosAPI.selectTodos();
    setSelectedTodos(result);
  }, []);

  return <TodosController selectedTodos={selectedTodos} onSelectTodos={handleSelectTodos} />;
}

export default App;
