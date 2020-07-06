const express = require('express');

const UserController = require('./controllers/UserController');

const routes = express();

//routes.get('/ongs', OngController.index );

routes.post('/users', UserController.create);