var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var indexRouter = require("./routes/index");
const db = require('./models')
const Sequelize = require('sequelize')
const sequelize = require('./config/database')

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/livros", indexRouter);



db.sequelize
.authenticate()
.then(() => {
    console.log('Sucesso na conexão!')
})
.catch((err => {
    console.error('Erro de conexão:')
}))


module.exports = app


