//padrão da rota da api : 
//www.site.com/api/v1/products
//preferencialmente no plural (products, establishments)

const express = require('express');
const route = express.Router();

const feedbackController = require('../controllers/feedbackController');  
const positionController = require('../controllers/positionController'); 
const employeeController = require('../controllers/employeeController'); 

// Rotas de feedback
route.get('/api/v1/feedbacks', feedbackController.listAll);
route.get('/api/v1/feedbacks/:code',feedbackController.getById);
route.post('/api/v1/feedbacks',feedbackController.create);
route.put('/api/v1/feedbacks/:code',feedbackController.update);
route.put('/api/v1/feedbacks/:code',feedbackController.delete);

// Rotas de Employee
route.get('/api/v1/employees', employeeController.list);
route.get('/api/v1/employees/:code', employeeController.getById);
route.post('/api/v1/employees', employeeController.create);
route.put('/api/v1/employees/:code',employeeController.update);
route.put('/api/v1/employees/:code',employeeController.delete);

//Rotas de Position
route.get('/api/v1/positions', positionController.list);
route.get('/api/v1/positions/:code', positionController.getById);
route.post('/api/v1/positions',positionController.create);
route.put('/api/v1/positions/:code',positionController.update);
route.put('/api/v1/positions/:code',positionController.delete);


module.exports = route;