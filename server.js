var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;	
server.listen(port,ip);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
console.log('server is listening...');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});