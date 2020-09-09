"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { io } = require('../../index');
io.on('connection', (socket) => {
    console.log('funcionas');
});
