const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();// se inicia express

const { mongoose } = require('./database/database');

//settings
app.set('port', process.env.PORT || 3000);

//meddlewares

app.use(morgan('dev'));//sirve para saber que peticiones genera el cliente
app.use(cors())
app.use(express.json())// se utiliza para que e pueda comunicar fronten con backen por medio de json

//routes 
//eventos
app.use('/api/eventos',require('./routes/eventos.Routes'));
//admin
app.use('/',require('./routes/adminRoutes'));
//starting the server

app.listen(app.get('port'),()=>{
    console.log(`server en port ${app.get('port')}`)
});