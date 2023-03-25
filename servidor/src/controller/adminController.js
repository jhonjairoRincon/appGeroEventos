const admin = require('../models/admin');
const jwt = require('jsonwebtoken')
const key = require('../config')
adminController = {};

adminController.getuser = async (req, res) => {
     try {
          const Admin = await admin.find()
     res.json(Admin)
     } catch (error) {
          console.log(error)
     }
     const Admin = await admin.find()
     res.json(Admin)
}
adminController.singUp = async (req, res) => {
     try {
          const { email, password } = req.body;
          const newAdmin = new admin({ email, password })
          await newAdmin.save();

          const token = jwt.sign({ _id: newAdmin._id }, key.secret)
          res.status(200).json({ token })
     } catch (error) {
          console.log(error)
     }

}

adminController.singIn = async (req, res) => {
     try {
          const { email, password } = req.body;
          const Admin = await admin.findOne({ email })
          if (!Admin) return res.status(401).json({ message: 'Usuario no REGISTRADO' })
          if (!password) return res.status(401).json('{message: Falta contraseña}')
          if (password != Admin.password) return res.status(500).json('{message: contraseña errada}')
          const token = jwt.sign({ id: Admin._id }, key.secret)
          res.status(200).json(token)
     } catch (error) {
          console.log(error)
     }

}

module.exports = adminController; 