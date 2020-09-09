import socketIO  = require('socket.io');

const { io } = require('../../index');

io.on('connection', (socket: socketIO.Socket) => {
    console.log('funcionas');
});