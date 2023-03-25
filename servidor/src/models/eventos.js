
const { Schema, model} = require('mongoose') ;

const eventoSchema = new Schema({
    fecha: { type: Date, required: true },
    evento: { type: String, required: true },
    cliente: { type: String, required: true },

})

 module.exports = model('evento', eventoSchema)

