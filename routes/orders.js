/**
 *
 * Created by my on 2017/4/29.
 */
var express = require('express');
var router = express.Router();
var orderController = require('../controller/orderController');

router.post('/', orderController.findAllOrder);
router.post('/add',orderController.addOrder)
router.delete('/:id',orderController.deleteOrderById)

module.exports = router

