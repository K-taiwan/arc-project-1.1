const express = require("express");
const router = express.Router();
const ctrl = require('../controllers')

// POST Create Cars
router.post('/sales', ctrl.sales.create);

// GET Cars by id
router.get('/sales/:id', ctrl.sales.show);

// GET All cars
router.get('/sales', ctrl.sales.index);

// DELETE cars by id
router.delete('/sales/:id', ctrl.sales.destroy);

module.exports = router;