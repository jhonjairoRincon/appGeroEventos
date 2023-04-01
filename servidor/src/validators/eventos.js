const { check, validationResult } = require('express-validator');

const validatorCreatItem = [
    check("fecha").exists().notEmpty(),
    check("evento").exists().notEmpty(),
   
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

module.exports = { validatorCreatItem }
