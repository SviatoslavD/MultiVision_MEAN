var express = require('express'),
    stylus = require('stylus'),
    morgan = require('morgan'),
    bodyParser = require('body-parser');

// set environment var
// if def NODE_ENV var was not set, then set it
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// create express application
var app = express();
// and configure express

// function to use stylus middleware
function compile (src, path) {
    return stylus(src).set('filename', path);
};
// use stylus middleware
app.use(stylus.middleware(
    {
        //source file
        src: __dirname + '/public',
        compile: compile
    }
));

// set view engine and views path
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

var logger = morgan('combined');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
/*set express to serving static files in directory images, CSS, and JavaScript */
app.use(express.static(__dirname + '/public'));

// method on get request from client for index page
app.get('*', function (req, res) {
    res.render('index');
});

var port = 3030;
app.listen(port);
console.log('Listening on port' + port + '...');

