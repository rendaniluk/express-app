var express = require('express');
var app = express();

//creating a route

app.get('/hello', function (req, res) {
	res.send('Hello Rendani');
});

//starting Server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;
console.log('Example app listening at http://%s:%s', host, port);

});
