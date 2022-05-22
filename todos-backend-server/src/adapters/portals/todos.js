'use strict';

var express = require('express');
const toggleTodo = require('../../messagehandler/toggleTodo');
const selectTodos = require('../../messagehandler/selectTodos');

var router = express.Router();

/* POST toggle todo command */
router.post('/toggle-todo', function (req, res) {
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

/* GET select todos query */
router.get('/select-todos', function (req, res) {
  const result = selectTodos();
  res.send(result);
});

module.exports = router;
