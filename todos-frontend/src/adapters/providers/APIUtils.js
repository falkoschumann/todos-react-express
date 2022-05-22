async function getJson(endpoint) {
  const response = await fetch(endpoint);
  return response.json();
}

async function postJson(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}

const APIUtils = {
  getJson,
  postJson,
};

export default APIUtils;
