var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on("connection", (socket) => {

    socket.on("newMessage", (data, think) => {
        console.log(data);
        console.log(think);
        socket.broadcast.emit("newMessage", data, think);
    })

    socket.on("nickname", (data) => {
        console.log(data);
        socket.broadcast.emit("nickname", data);
    })

    socket.on("oops", () => {
        console.log("oops triggered");
        socket.broadcast.emit("oops", );
    })


})

server.listen(80);