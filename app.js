var express = require('express');
var path = require('path');
const bodyParser = require('body-parser')
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const menuRouter = require('./routes/Menu')

var app = express();
mongodConnect = process.env.DB_CONNECT
mongoose.connect(mongodConnect, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public/upload', express.static('public'))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter)

module.exports = app;
