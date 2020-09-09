"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server/server"));
const router_1 = __importDefault(require("./router/router"));
// import MylSQL from './mysql/mysql';
const socketIO = require("socket.io");
const http = require("http");
//
const expressServer = server_1.default.init(3000);
const server = http.createServer(expressServer.app);
expressServer.app.use(router_1.default);
//
module.exports.io = socketIO(server);
require('./server/socket/socket');
server.listen(3000);
expressServer.start(() => {
    console.log('SErvidor corriendo en el puerto 3000');
});
