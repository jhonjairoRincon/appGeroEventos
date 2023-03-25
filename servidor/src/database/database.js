mongoose = require('mongoose');


const uri = 'mongodb://localhost/GEROEVENTOS';
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
    .then(db => console.log("conectadoDB"))
    .catch(err =>console.error(err))

module.exports = mongoose;