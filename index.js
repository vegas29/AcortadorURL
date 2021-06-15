const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./router');

const app = express();

//Body parser para leer los datos del formulario

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Conectar mongo

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/acortadorurl',{
    useNewUrlParser: true
})

//Habilitar pug

app.set('view engine', 'pug');

//Carpeta para las vistas
app.set('views', path.join(__dirname, './views'));


//Cargar los archivos staticos
app.use(express.static('public'));



//Definir rutas de la aplicación

app.use('/', routes());

app.listen(3000);