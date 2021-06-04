const routes = require('express').Router();
const modelsController = require('./models');
const carsController = require('./cars');

routes.use('/models', modelsController);
routes.use('/cars', carsController);

module.exports = routes;