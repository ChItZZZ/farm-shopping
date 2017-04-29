/**
 *
 * Created by my on 2017/4/29.
 */
var express = require('express');
var router = express.Router();
var itemController = require('../controller/itemController');

router.get('/', itemController.findAllItems);
router.post('/add',itemController.addItem)
router.post('/update/:id',itemController.updateItem)
router.delete('/:id',itemController.deleteItemById)

module.exports = router

