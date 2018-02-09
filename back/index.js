var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on("connection", (socket) => {

    socket.on("newMessage", (data) => {
        console.log(data);
        socket.broadcast.emit("newMessage", data);
    })

})

server.listen(80);