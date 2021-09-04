const {DataTypes,Deferrable}  = require('sequelize');

const {dbMysql} = require('../db/conection');
const tbmaterias = require('./tbmaterias');
const tbpersona = require('./tbPersona');
const tbprogramas = require('./tbprogramas');

const tbmateriatutor = dbMysql.define('tbmateriatutor',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
    },
    idprograma: {
        type: DataTypes.STRING,
        references: {
            model: tbprogramas,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    idmateria: {
        type: DataTypes.STRING,
        references: {
            model: tbmaterias,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    idpersona: {
        type: DataTypes.INTEGER,
        references: {
            model: tbpersona,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
      
},{
    freezeTableName: true,
    tableName: 'tbmateriatutor',
    timestamps: false
  }
);

 module.exports = tbmateriatutor;
