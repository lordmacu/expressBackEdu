const {DataTypes,Deferrable}  = require('sequelize');

const {dbMysql} = require('../../db/conection');
const tbmaterias = require('./tbmaterias');
const tbprogramas = require('./tbprogramas');

const progmaterias = dbMysql.define('tbprogmaterias',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
    },
    idprograma:{
        type: DataTypes.INTEGER,
        model: tbprogramas,
        hey: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    ,
    idmateria: {
        type: DataTypes.INTEGER,
        model: tbmaterias,
        hey: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
    
  
      
},{
    freezeTableName: true,
    tableName: 'tbprogmaterias',
    timestamps: false
  }
);

 module.exports = progmaterias;
