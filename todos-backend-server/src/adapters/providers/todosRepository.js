// @ts-check
'use strict';

const fs = require('fs');
const path = require('path');

const file = './data/todos.json';

function load() {
  if (!fs.existsSync(file)) {
    return [];
  }

  const json = fs.readFileSync(file);
  return JSON.parse(json.toString());
}

function store(todos) {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const json = JSON.stringify(todos);
  fs.writeFileSync(file, json, 'utf8');
}

const todosRepository = {
  load,
  store,
};

module.exports = todosRepository;
