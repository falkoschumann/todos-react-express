// @ts-check
'use strict';

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./adapters/portals/index');
var todosRouter = require('./adapters/portals/todos');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', indexRouter);
app.use('/api/todos', todosRouter);

module.exports = app;
