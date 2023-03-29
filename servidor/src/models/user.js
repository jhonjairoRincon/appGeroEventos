const { model, Schema} = require('mongoose');

const userSchema = new Schema ({
    name: { type: String},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    role: {type: ['admin','user']}
},{
    timestamps: true
})

module.exports = model('user', userSchema);//user hace referencia a la coleccion 
