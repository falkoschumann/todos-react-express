'use strict';

var express = require('express');

const addTodo = require('../../messagehandler/addTodo');
const clearCompleted = require('../../messagehandler/clearCompleted');
const destroyTodo = require('../../messagehandler/destroyTodo');
const selectTodos = require('../../messagehandler/selectTodos');
const toggleTodo = require('../../messagehandler/toggleTodo');

var router = express.Router();

router.post('/add-todo', (req, res) => {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).send('Content type must be application/json.');
    return;
  }
  if (req.body.title == null) {
    res.status(422).send('Missing property "title" in request body.');
    return;
  }

  const status = addTodo({ title: req.body.title });
  res.send(status);
});

router.post('/clear-completed', (req, res) => {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).send('Content type must be application/json.');
    return;
  }

  const status = clearCompleted();
  res.send(status);
});

router.post('/destroy-todo', (req, res) => {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).send('Content type must be application/json.');
    return;
  }
  if (req.body.todoId == null) {
    res.status(422).send('Missing property "todoId" in request body.');
    return;
  }
  if (typeof req.body.todoId !== 'number') {
    res.status(422).send('Property "todoId" in request body must be number value.');
    return;
  }

  const status = destroyTodo({ todoId: req.body.todoId });
  res.send(status);
});

router.post('/toggle-todo', (req, res) => {
  if (req.headers['content-type'] !== 'application/json') {
    res.status(415).send('Content type must be application/json.');
    return;
  }
  if (req.body.todoId == null) {
    res.status(422).send('Missing property "todoId" in request body.');
    return;
  }
  if (typeof req.body.todoId !== 'number') {
    res.status(422).send('Property "todoId" in request body must be number value.');
    return;
  }

  const status = toggleTodo({ todoId: req.body.todoId });
  res.send(status);
});

router.get('/select-todos', (req, res) => {
  const result = selectTodos();
  res.send(result);
});

module.exports = router;
