const express = require('express');
const router = express.Router();
const eventoController = require('../controller/eventos.controller')
const verifyToken = require('../middlewares/authJwt')

router.get('/', verifyToken, eventoController.getEventos)
router.get('/:id', eventoController.getEvento)
router.post('/', eventoController.postEvento)
router.put('/:id', eventoController.putEvento)
router.delete('/:id', eventoController.deleteEvento)


module.exports = router;