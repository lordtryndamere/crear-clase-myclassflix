var moment  = require('moment');
var express = require('express');
var helmet = require('helmet');
var bodyparser = require('body-parser');
var session = require('express-session');
var http = require('http')




var app  = express();
var server  = http.Server(app)





//LOAD FILES ROUTES

var user  = require('./route/class.route')



//MIDLEWARES
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

app.use(helmet())




//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY,autorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});




// DEFINEDS ROUTES
app.use('/API/users',user);


module.exports = server;