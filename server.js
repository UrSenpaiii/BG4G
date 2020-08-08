const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./build/webpack.base.conf');
const compiler = webpack(config);

const express = require('express');
const app = express();

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

app.get('/pages/current.html', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});

//MySQL для переноса данных и подключение бд к сайту через express!!!!!!!!!!

const mysql = require('mysql');
let connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  database: "4greens",
  password : ''
});

connection.connect(function(err){
  if (err) {
return console.error("Ошибка: " + err.message);
}
else{
  console.log("Подключение к серверу MySQL успешно установлено");
}
});
