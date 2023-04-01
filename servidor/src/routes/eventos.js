const express = require('express');
const router = express.Router();
const eventoController = require('../controller/eventosController')
const verifyToken = require('../middlewares/authJwt')
const { validatorCreatItem } = require('../validators/eventos')

router.get('/', verifyToken, eventoController.getEventos)
router.get('/:id', eventoController.getEvento)
router.post('/', validatorCreatItem, eventoController.postEvento)
router.put('/:id', eventoController.putEvento)
router.delete('/:id', eventoController.deleteEvento)


module.exports = router;