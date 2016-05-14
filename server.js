var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/',function(req,res){
	res.send("hello world");
});
var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
app.listen(port,ip);



// var app = require('express')();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);

// app.get('/',function(req,res){
	// res.sendFile(__dirname+'/index.html');
// });

// io.on('connection',function(socket){
	// socket.on('chat message', function(msg){
			// console.log("message "+msg);
			// io.emit('chat message', msg);
		// });
// });
// var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
// var port = process.env.OPENSHIFT_NODEJS_PORT || 3000;
// app.listen(port,ip);