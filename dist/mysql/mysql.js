"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MylSQL {
    constructor() {
        this.conectado = false;
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
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutaQuery(query, callback) {
        this.instance.conexion.query(query, (err, result, fields) => {
            if (err) {
                console.log('Error en query');
                console.log(err);
                return callback(err);
            }
            if (result.length === 0) {
                callback('El registro solicitado no exitste');
            }
            else {
                callback(null, result);
            }
        });
    }
    conectarDB() {
        this.conexion.connect((err) => {
            if (err) {
                console.log(err.message);
                return;
            }
            this.conectado = true;
            console.log('Base de datos online');
        });
    }
}
exports.default = MylSQL;
