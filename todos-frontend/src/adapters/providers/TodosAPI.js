// @ts-check

import APIUtils from './APIUtils';

const baseUrl = '/api/todos';

async function selectTodos() {
  return APIUtils.getJson(`${baseUrl}/select-todos`);
}

const TodosAPI = {
  selectTodos,
};

export default TodosAPI;
