const user = require('../models/user');
const jwt = require('jsonwebtoken')
const key = require('../config')
userController = {};

userController.getuser = async (req, res) => {
     try {
          const User = await user.find()
     res.json(User)
     } catch (error) {
          console.log(error)
     }
     const User = await user.find()
     res.json(User)
}
userController.singUp = async (req, res) => {
     try {
          const { name, email, password,role } = req.body;
          const newUser = new user({ name,email, password,role })
          await newUser.save();

          const token = jwt.sign({ _id: newUser._id }, key.secret)
          res.status(200).json({ token })
     } catch (error) {
          console.log(error)
     }

}

userController.singIn = async (req, res) => {
     try {
          const { email, password } = req.body;
          const User = await user.findOne({ email })
          if (!User) return res.status(401).json({ message: 'Usuario no REGISTRADO' })
          if (!password) return res.status(401).json('{message: Falta contraseña}')
          if (password != User.password) return res.status(500).json('{message: contraseña errada}')
          const token = jwt.sign({ id: User._id }, key.secret)
          res.status(200).json(token)
     } catch (error) {
          console.log(error)
     }

}

module.exports = userController; 