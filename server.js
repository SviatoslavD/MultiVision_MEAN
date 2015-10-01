var express = require('express');

// set environment var
// if def NODE_ENV var was not set, then set it
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// create express application
var app = express();
// and configure express

// set view engine and views path
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');


// method on get request from client for index page
app.get('*', function (req, res) {
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port' + port + '...');

