var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')

router.get('/', userController.findAllUsers);

router.post('/add',userController.registerUser)
router.post('/update/:id',userController.updateUserById)
router.delete('/:id',userController.deleteUserById)

module.exports = router;
