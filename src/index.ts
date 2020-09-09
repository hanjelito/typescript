import Server from './server/server';
import router from './router/router'
// import MylSQL from './mysql/mysql';
import socketIO  = require('socket.io');
import http = require('http');
//
const expressServer = Server.init(3000);
const server = http.createServer(expressServer.app);



expressServer.app.use(router);

//
module.exports.io = socketIO(server);
require('./server/socket/socket');

server.listen(3000);
expressServer.start(()=>{
    console.log('Servidor corriendo en el puerto 3000');
})
