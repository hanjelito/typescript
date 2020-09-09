import Server from './server/server';
import router from './router/router'
import MylSQL from './mysql/mysql';

const server = Server.init(3000);

server.app.use(router);

// const mysql = new MylSQL();
// MylSQL.instance;


server.start(()=>{
    console.log('SErvidor corriendo en el puerto 3000');
})
