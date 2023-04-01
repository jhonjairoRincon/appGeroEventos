const user = require('../models/user');

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

module.exports = userController; 