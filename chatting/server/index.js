var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/*', function (req, res) {
    res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', function (socket) {

    // get the unique room name from request
    var room_name = socket.request.headers.referer;
    // join a "room"
    socket.join(room_name);

    socket.on('chat message', function (msg) {
        // send message to specific "room"
        io.to(room_name).emit('chat message', msg);
    });
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});