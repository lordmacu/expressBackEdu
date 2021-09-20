const {DataTypes,Deferrable}  = require('sequelize');

const {dbMysql} = require('../../db/conection');
const tbconvenio = require('./tbconvenio');

const tbnotificacionesquema = dbMysql.define('tbnotificacionesquema',{
    
    id:{
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
        }
    ,idConvenio: {
        type: DataTypes.INTEGER,
        model: tbconvenio,
        key: 'id',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
    },
    nombre: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.TEXT,
    },
    estado: {
        type: DataTypes.INTEGER,
    } 
  
      
},{
    freezeTableName: true,
    tableName: 'tbnotificacionesquema',
    timestamps: false
  }
);

 module.exports = tbnotificacionesquema;
