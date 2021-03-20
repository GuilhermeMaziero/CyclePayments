const { Router } = require('express');
const routes = new Router();

//CONTROLERS
const BillingCycleController = require('./app/controllers/BillingCycleController');
const BillingSumaryController = require('./app/controllers/BillingSumaryController');

//API-ROUTES
routes.get('/api/billingCycles',BillingCycleController.index);
routes.post('/api/billingCycles',BillingCycleController.store);
routes.put('/api/billingCycles/:id',BillingCycleController.update);
routes.delete('/api/billingCycles/:id',BillingCycleController.delete);

routes.get('/api/billingSumary',BillingSumaryController.index);


module.exports = routes;