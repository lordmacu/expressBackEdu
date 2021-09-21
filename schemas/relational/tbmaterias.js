const DataTypes  = require('sequelize');

const {dbMysql} = require('../../db/conection');
//const tbconvenio = require('./tbConvenio');
//const tbpersona = require('./tbPersona');

const tbmaterias = dbMysql.define('tbmaterias',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER
    },
    sigla: {
        type: DataTypes.STRING
    },
    version: {
        type: DataTypes.INTEGER
    },
    nombre: {
        type: DataTypes.STRING
    },
    creditos: {
        type: DataTypes.FLOAT
    },
    horas: {
        type: DataTypes.INTEGER
    },
    contenidos: {
        type: DataTypes.TEXT
    },
    fechainicio: {
        type: DataTypes.DATE
    },
    fechafinal: {
        type: DataTypes.DATE
    },
    tipo: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.STRING
    }
}, 
    {
    freezeTableName: true,
    tableName: 'tbmaterias',
    timestamps: false
    }
);

 module.exports = tbmaterias;
