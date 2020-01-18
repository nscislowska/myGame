var express = require('express');

var app = express();
var port = 8080;
app.listen(port, ()=> console.log('myGame server runnin on port: 8080'));

var publicPath = __dirname + '/public';
app.use(express.static(publicPath));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});