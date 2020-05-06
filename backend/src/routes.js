const express = require('express');
const routes = express.Router();

const OngsController = require('./controllers/OngsController');
const ProfileController = require('./controllers/ProfileController');
const DefaultController = require('./controllers/DefaultController');
const IncidentController = require('./controllers/IncidentsController');
const SessionController = require('./controllers/SessionController');


routes.get('/', DefaultController.index);
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;