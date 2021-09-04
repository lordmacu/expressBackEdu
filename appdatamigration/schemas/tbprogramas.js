const {DataTypes,Deferrable}  = require('sequelize');

const {dbMysql} = require('../db/conection');
const tbconvenio = require('./tbconvenio');
const tbnotificacionesquema = require('./tbnotificacionesquema');
const tbpersona = require('./tbPersona');

const tbprogramas = dbMysql.define('tbprogramas',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
    },
    sigla: {
        type: DataTypes.STRING,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.TEXT('tiny'),
    },
    iddirector: {
        type: DataTypes.INTEGER,
        references: {
            model: tbpersona,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        },
    },
    idcoordinador: {
        type: DataTypes.INTEGER,
        references: {
            model: tbpersona,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        },
    },
    perfilestudiante: {
        type: DataTypes.TEXT
    },
    titulacion: {
        type: DataTypes.TEXT
    },
    preciototal: {
        type: DataTypes.INTEGER
    },
    periodo: {
        type: DataTypes.INTEGER
    },
    anno: {
        type: DataTypes.SMALLINT
    },
    fechainicio: {
        type: DataTypes.DATE
    },
    fechafin: {
        type: DataTypes.DATE
    },
    idconvenio: {
        type: DataTypes.INTEGER,
        references: {
            model: tbconvenio,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        },
    },
    //Cosultar si es útil
    idNotificacionEsquema: {
        type: DataTypes.INTEGER,
        model: tbnotificacionesquema,
        hey: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
    },
    //este campo no hay
    approvationNote: {
        type: DataTypes.STRING
    }
      
},{
    freezeTableName: true,
    tableName: 'tbprogramas',
    timestamps: false
  }
);

 module.exports = tbprogramas;
