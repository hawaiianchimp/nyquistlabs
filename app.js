/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var exphbs  = require('express3-handlebars');
var mongoose = require('mongoose');
var mongo_url = (typeof MONGOHQ_URL != 'undefined') ? MONGOHQ_URL:'mongodb://localhost/db';
mongoose.connect(mongo_url);


var app = express();

app.engine('html', exphbs({extname:'.html', defaultLayout: 'main'}));
app.set('view engine', 'html');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}


//routes
app.get('/', function(req, res){
    res.render('home');
});

app.get('/index', function(req, res){
    res.render('home');
});

app.get('/about', user.about);

app.get('/users', user.list);
app.get('/create', user.create);

// app.get('/*', function(req, res){
//     res.render('home');
// });


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});