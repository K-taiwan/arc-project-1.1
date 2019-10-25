const express = require("express");
const router = express.Router();
const ctrl = require('../controllers')

// ROUTE = /api/v1

// POST Create Cars
router.post('/cars', ctrl.cars.create);

// GET Cars by id
router.get('/cars/:id', ctrl.cars.show);

// GET All cars
router.get('/cars', ctrl.cars.index);

// DELETE cars by id
router.delete('/cars/:id', ctrl.cars.destroy);

// Put by id
router.put('/cars/:id', ctrl.cars.update);




// POST Create Sales
router.post('/sales', ctrl.sales.create);

// GET Cars by id
router.get('/sales/:id', ctrl.sales.show);

// Update Car by id
router.put('/sales/:id', ctrl.sales.update);

// GET All cars
router.get('/sales', ctrl.sales.index);

// DELETE cars by id
router.delete('/sales/:id', ctrl.sales.destroy);





module.exports = router;
