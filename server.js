var express = require('express')
var app = express()

var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.use('/', require('./src/moral.js'));

app.listen(port, function () {
  console.log('Listening on port ' + port)
});