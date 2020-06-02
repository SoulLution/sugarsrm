var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var busboyBodyParser = require('busboy-body-parser');

// var cors = require('./middlewares/cors');

var publicRouter = require('./routes/public');
var usersRouter = require('./routes/users');

 
const	cookie = {
	name: "CRM_sugar_coock",
	secret: "72943816",
	signed: true,
	domain: ".127.0.0.1",
	path: "/",
	secure:true,
	httpOnly: false,
	maxAge: 604800000,
	hostOnly : false
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(cookie.secret))
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(busboyBodyParser());

// app.use(cors)

var cors = require('cors')
app.use(cors({
  origin: 'http://localhost:9003'
}));

app.post('/public', publicRouter);
app.post('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
