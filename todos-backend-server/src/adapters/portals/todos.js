'use strict';

var express = require('express');
const selectTodos = require('../../messagehandler/selectTodos');

var router = express.Router();

/* GET select todos query */
router.get('/select-todos', function (req, res) {
  const result = selectTodos();
  res.send(result);
});

module.exports = router;
