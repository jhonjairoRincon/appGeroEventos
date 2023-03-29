const mongoose = require('mongoose');


const uri = process.env.uri

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("conectadoDB"))
    .catch(err => console.error(err))

module.exports = mongoose;