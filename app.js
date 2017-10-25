var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var session = require("express-session");




/*引用路由模块*/
var index = require('./routes/index');
var users = require('./routes/users');

var questions = require('./routes/questions');
var answers = require('./routes/answers');
var tags = require('./routes/tags');

var login = require('./routes/login');
var logout = require('./routes/logout');
var register = require('./routes/register');
var reset = require("./routes/reset");

var api = require("./routes/api");


var tags = require("./routes/tags");




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(favicon(path.join(__dirname,'public/favicon1.ico')));

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, './public/favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  resave:true,
  saveUninitialized:false,
  secret:'hwngfgksaierqww',
  cookie: {
    maxAge:1000 * 60 * 30
  }
}));

app.use('/', index);
app.use('/users', users);


app.use("/questions",questions);
app.use("/answers",answers);
app.use("/tags",tags);
app.use("/login",login);
app.use("/logout",logout);
app.use("/register",register);
app.use("/reset", reset);

app.use("/api", api);

app.use("/tags", tags);





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
