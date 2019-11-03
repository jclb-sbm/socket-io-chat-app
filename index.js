var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});


// Homework
// Here are some ideas to improve the application:

// -Broadcast a message to connected users when someone connects or disconnects.
// -Add support for nicknames.
// -Don’t send the same message to the user that sent it himself. Instead, append the message directly as soon as he presses enter.
// -Add “{user} is typing” functionality.
// -Show who’s online.
// -Add private messaging.
// -Share your improvements!