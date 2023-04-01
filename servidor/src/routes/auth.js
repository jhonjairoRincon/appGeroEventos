const { Router } = require('express');
const router = Router();
const auth = require('../controller/auth')
const { validatorRegister } = require('../validators/auth')

router.post('/singup', validatorRegister, auth.singUp);
router.post('/singin', auth.singIn);

module.exports = router;