
const { Schema, model } = require('mongoose');

const eventoSchema = new Schema({
    fecha: { type: Date, required: true },
    evento: { type: String, required: true },
    cliente: { type: String, required: true },
    numeroInvitados: {
        adultos: { type: Number },
        niños: { type: Number }
    },
    comida: {
        comidaAdultos: {
            proteina: { type: String },
            ensalada: { type: String },
            arroz: { type: String },
            guarnición: { type: String },
            bebidas: { type: String }
        },
        comidaNiños: {
            principal: ["hamburguesa", "perro Caliente", "pollo frito", "nuggets de pollo"],
            acompañamiento: { type: String }
        }
    },
    lenseria: {
        servilletas: {
            color: { type: String },
            cantidad: { type: Number }
        },
        manteles: {
            color: { type: String },
            cantidad: { type: Number }
        },
        tapas: {
            tipo: ["tapas", "caminos"],
            color: { type: String },
            cantidad: { type: Number }
        },
        fajones: {
            color: { type: String },
            cantidad: { type: Number }
        }
    },
    montaje: {
        mesas: {
            tipo: ["redonda", "rectangular", "vintage"],
            cantidad: { type: Number }
        },
        sillas: {
            tipo: ["plastica", "tifanny", "crossback"],
            cantidad: { type: Number }
        },
        carpas: {
            _4x4: {
                cantidad: { type: Number }
            },
            _6x6: {
                cantidad: { type: Number }
            }
        },
    },
    menaje: {
        platoFuerte: {
            cantidad: { type: Number }
        },
        platoTortero: {
            cantidad: { type: Number }
        },
        platoSitio: {
            cantidad: { type: Number },
            color: { type: String }
        },
        cuchillo: {
            cantidad: { type: Number }
        },
        tenedorFuerte: {
            cantidad: { type: Number }
        },
        TenedorTortero: {
            cantidad: { type: Number }
        },
        cristaleria: {
            vasoAlto: {
                cantidad: { type: Number }
            },
            vasoCorto: {
                cantidad: { type: Number }
            },
            copaChampaña: {
                cantidad: { type: Number }
            },
            copaAgua: {
                cantidad: { type: Number }
            },
            copaVino: {
                cantidad: { type: Number }
            },
        },
    },
    decoracion: {
        mesas: {
            tipo: ["vintage", "cilindros", "doradas"],
            cantidad: { type: Number }
        },
        backing: {
            typo: ["redondo", "exagonal", "madera"]
        },
        descripcion: { type: String }
    },
    otros: {
        torta: {
            sabor: ["milkyway", "tres leches", "vainilla", "vainilla amapola", "red velvet", "envinada"],
            cubierta: ["fondant","cream"],
            cantidad: { type: Number }
        },
        sonido: ["si", "no"],
        otrosServicios: { type: String }
    }

})

module.exports = model('evento', eventoSchema)

