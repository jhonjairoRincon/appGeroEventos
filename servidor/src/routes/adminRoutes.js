const { Router } = require('express');
const router = Router();
const adminController = require('../controller/adminController')
const verifyToken = require('../middlewares/authJwt')

router.get('/', adminController.getuser);
router.post('/singup', adminController.singUp);
router.post('/singin', adminController.singIn);

module.exports = router;