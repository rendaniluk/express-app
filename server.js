var express = require('express');
var app = express();

//creating a route

app.get('/hello/:id', function (req, res) {
	res.send('Hello	' + req.params.id);
});

//starting Server
var server = app.listen(3000, function () {

 var host = server.address().address;
 var port = server.address().port;
console.log('Example app listening at http://%s:%s', host, port);

});
