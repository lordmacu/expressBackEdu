const express = require('express');
const cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

const  {conection}  = require('../db/conection');
//const {logger} = require('../helpers/index');

class Server{

    constructor(){

        this.app = express();
        this.port=process.env.PORT;

        this.app.set('trust proxy', true);

        this.paths = {
            people:       '/api/people',
           // users:      '/api/users',
        };


        //Conexion a la base de datos
        this.conectarDB();


         //midelwares funciones que siempre se van a ejeuctar cuando levantemos el servidor
         this.middlewares();

        //llamamos a las rutas definidas
        this.routes();
    
    }

    conectarDB(){
        conection();
    }

    middlewares(){

        //Cors
        this.app.use(cors());

        //directorio público
        this.app.use( express.static('public') );


        //Parseo y lectura del body
        //this.app.use(express.json());
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ extended: false,limit: '50mb' }));
        this.app.use(cookieParser());


    }

    routes(){
       
        this.app.use( this.paths.people, require('../routes/tbpersona'));
       // this.app.use( this.paths.users, require('../routes/users'));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Listen port: ${this.port}`);
        })
    }

}

module.exports = Server;