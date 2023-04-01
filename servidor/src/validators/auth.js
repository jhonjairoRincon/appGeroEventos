const { check, validationResult } = require('express-validator');

const validatorRegister = [
    check("email").exists().notEmpty().isEmail(),
    check("password").notEmpty(),

    (req,res,next)=>{
        try {
            validationResult(req).throw();
            return next()
        } catch (err) {
            res.status(403),
            res.send({error: err.array()})
        }
    }

];

module.exports = { validatorRegister }
