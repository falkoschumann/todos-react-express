'use strict';

var express = require('express');

const { isJson, hasProperty, hasPropertyType } = require('./validators');
const addTodo = require('../../messagehandler/addTodo');
const clearCompleted = require('../../messagehandler/clearCompleted');
const destroyTodo = require('../../messagehandler/destroyTodo');
const saveTodo = require('../../messagehandler/saveTodo');
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
    hasProperty('id', req, res) &&
    hasPropertyType('id', 'number', req, res)
  ) {
    const status = destroyTodo({ id: req.body.id });
    res.send(status);
  }
});

router.post('/save-todo', (req, res) => {
  if (
    isJson(req, res) &&
    hasProperty('id', req, res) &&
    hasPropertyType('id', 'number', req, res) &&
    hasProperty('newTitle', req, res) &&
    hasPropertyType('newTitle', 'string', req, res)
  ) {
    const status = saveTodo({ id: req.body.id, newTitle: req.body.newTitle });
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
    hasProperty('id', req, res) &&
    hasPropertyType('id', 'number', req, res)
  ) {
    const status = toggleTodo({ id: req.body.id });
    res.send(status);
  }
});

module.exports = router;
