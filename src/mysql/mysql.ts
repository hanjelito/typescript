import mysql = require('mysql');

export default class MylSQL {
    private static _instance: MylSQL;

    conexion: mysql.Connection;
    conectado: boolean= false;

    constructor(){
        console.log('Clase Inicializada');

        this.conexion = mysql.createConnection({
            host: '127.0.0.1',
            port: 3307,
            user: 'root',
            password: 'Sanfergwsvps.',
            database: 'testing'
        });
        this.conectarDB();
    }

    public static get instance(){
        return this._instance || (this._instance = new this());
    }

    static ejecutaQuery(query:string, callback: Function){
        this.instance.conexion.query(query, (err, result:Object[], fields)=>{
            if(err){
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }

            if(result.length === 0) {
                callback('El registro solicitado no exitste');
            }else{
                callback(null, result);
            }
        });
    }

    private conectarDB(){
        this.conexion.connect(( err: mysql.MysqlError ) => {
            if(err){
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online');
        });
    }
}