const express = require('express');

const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');
const routes = express();

routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.index );

routes.get('/user', UserController.getUser );

routes.post('/users', UserController.create );

module.exports = routes