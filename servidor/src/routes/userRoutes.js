const { Router } = require('express');
const router = Router();
const userController = require('../controller/userController')
const verifyToken = require('../middlewares/authJwt')

router.get('/', userController.getuser);
router.post('/singup', userController.singUp);
router.post('/singin', userController.singIn);

module.exports = router;