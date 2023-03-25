const evento = require('../models/eventos');
const eventoController = {};

eventoController.getEventos = async (req, res) => {
    try {
        const eventosdb = await evento.find()
        res.json(eventosdb)
    } catch (error) {
        console.log(error)
    }

}

eventoController.getEvento = async (req, res) => {
    try {
        const eventodb = await evento.findById(req.params.id)
        res.send(eventodb)
    } catch (error) {
        console.log(error)
    }

}

eventoController.postEvento = async (req, res) => {
    try {
        const newEvento = new evento(req.body)
        await newEvento.save()
        res.send({ message: 'curso creado' })
    } catch (error) {
        console.log(error)
    }

}

eventoController.putEvento = async (req, res) => {
    try {
        await evento.findByIdAndUpdate(req.params.id, req.body)
        res.json({ status: 'evento actualizado' })
    } catch (error) {
        console.log(error)
    }

}

eventoController.deleteEvento = async (req, res) => {
    try {
        await evento.findByIdAndRemove(req.params.id)
        res.json({ status: "eliminado" })
    } catch (error) {
        console.log(error)
    }

}
module.exports = eventoController