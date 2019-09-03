const express = require('express');
const path = require('path');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

io.on('connection', client => {
    let name;
    client.on('name', (data) => {
        name = data.name;
        io.emit('userConnect', { name: data.name, id: client.id });
    });
    client.emit('userData', { id: client.id });
    client.on('mouse', data => {
        io.emit('mouse', data);
    });
    client.on('nameSelect', data => {
        io.emit(data);
    });
    client.on('disconnect', () => {
        io.emit('userDisconnect', { id: client.id, name: name });
    });
});

server.listen(PORT);