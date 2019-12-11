const express = require('express');
const path = require('path');
const app = express();

const routesApi = require('./routes.api');



//configuraciónes
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));

//Rutas
app.use('/api', routesApi);


//server
app.listen(app.get('port'), ()=>{
    console.log(`Servidor en puerto ${app.get('port')}`);
});

