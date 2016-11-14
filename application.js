var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var app = express();


app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));
app.use(bodyParser.json({extended: true, limit: '50mb'}));


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});


app.use(express.static(__dirname));
app.set('port', (process.env.PORT || 5555));
app.listen(app.get('port'), function() {
 console.log("app is running at localhost:" + app.get('port'));
});

app.get('/*', function (request, response) {
  response.sendFile('index.html', {root: '/'});
});