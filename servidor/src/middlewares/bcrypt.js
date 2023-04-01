const bcryptjs = require('bcryptjs')

const bcrypt = async (password) => {
    const hash = await bcryptjs.hash(password,8)//se utiliza la funcion de bcrypt que recibe el passwor y se pone un numero
    return hash
}
const compare = async (password, hashPassword) => {
    return await bcryptjs.compare(password, hashPassword)
}

module.exports = { bcrypt, compare }