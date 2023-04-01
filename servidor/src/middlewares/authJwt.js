const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try {
        // solicita un toquen por el heders
        const Token = req.headers.authorization;
        // si no se envia el token enviar mensaje que no hay token 
        if (!Token) return res.status(403).json({ message: 'no token provided' });
        // verifica el toquen y devuelve el _id del token
        const decoded = jwt.verify(Token, process.env.secret);
        req.userId = decoded.id
        next()
    } catch (err) {
        return res.status(401).json({ message: "usuario invalido" })
    }
}


module.exports = verifyToken;

