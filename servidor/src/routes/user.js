const { Router } = require('express');
const router = Router();
const userController = require('../controller/userController')
const verifyToken = require('../middlewares/authJwt')

router.get('/', userController.getuser);


module.exports = router;