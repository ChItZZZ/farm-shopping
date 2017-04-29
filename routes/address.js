/**
 *
 * Created by my on 2017/4/29.
 */
var express = require('express');
var router = express.Router();
var addressController = require('../controller/addressController');

router.get('/', addressController.findAllAddress);
router.post('/add',addressController.addAddress)
router.post('/update/:id',addressController.updateAddress)
router.delete('/:id',addressController.deleteAddressById)

module.exports = router

