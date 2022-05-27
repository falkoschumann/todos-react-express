'use strict';

var express = require('express');

const { isJson, hasProperty, hasPropertyType } = require('./validators');
const addTodo = require('../../messagehandler/addTodo');
const clearCompleted = require('../../messagehandler/clearCompleted');
const destroyTodo = require('../../messagehandler/destroyTodo');
const selectTodos = require('../../messagehandler/selectTodos');
const toggleAll = require('../../messagehandler/toggleAll');
const toggleTodo = require('../../messagehandler/toggleTodo');

var router = express.Router();

router.post('/add-todo', (req, res) => {
  if (
    isJson(req, res) &&
    hasProperty('title', req, res) &&
    hasPropertyType('title', 'string', req, res)
  ) {
    const status = addTodo({ title: req.body.title });
    res.send(status);
  }
});

router.post('/clear-completed', (req, res) => {
  if (isJson(req, res)) {
    const status = clearCompleted();
    res.send(status);
  }
});

router.post('/destroy-todo', (req, res) => {
  if (
    isJson(req, res) &&
    hasProperty('todoId', req, res) &&
    hasPropertyType('todoId', 'number', req, res)
  ) {
    const status = destroyTodo({ todoId: req.body.todoId });
    res.send(status);
  }
});

router.get('/select-todos', (req, res) => {
  const result = selectTodos();
  res.send(result);
});

router.post('/toggle-all', (req, res) => {
  if (
    isJson(req, res) &&
    hasProperty('checked', req, res) &&
    hasPropertyType('checked', 'boolean', req, res)
  ) {
    const status = toggleAll({ checked: req.body.checked });
    res.send(status);
  }
});

router.post('/toggle-todo', (req, res) => {
  if (
    isJson(req, res) &&
    hasProperty('todoId', req, res) &&
    hasPropertyType('todoId', 'number', req, res)
  ) {
    const status = toggleTodo({ todoId: req.body.todoId });
    res.send(status);
  }
});

module.exports = router;
