const user = require('../models/user');
const jwt = require('jsonwebtoken')
const { bcrypt, compare } = require('../middlewares/bcrypt')
const { matchedData } = require('express-validator')

const auth = {};

auth.singUp = async (req, res) => {
    try {
        
        let { name, email, password, role } = req.body;
        password = await bcrypt(req.body.password)
        const body = {...req.body, password}
        const newUser = new user({ name, email, password, role })
        
        await newUser.save();
        console.log(body)
        const token = jwt.sign({ _id: newUser._id }, process.env.secret)
        res.status(200).json({ token })
        
    } catch (error) {
        console.log(error)
    }

}

auth.singIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const User = await user.findOne({ email })
        if (!User) return res.status(401).json({ message: 'Usuario no REGISTRADO' })
        if (!password) return res.status(401).json('{message: Falta contraseña}')
        const comparar = await compare(password,User.password)
        if (!comparar) return res.status(500).json('{message: contraseña errada}')
        const token = jwt.sign({ id: User._id }, process.env.secret)
        res.status(200).json(token)
    } catch (error) {
        console.log(error)
    }

}

module.exports = auth