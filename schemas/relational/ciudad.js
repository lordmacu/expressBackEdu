const DataTypes  = require('sequelize');

const {dbMysql} = require('../../db/conection');

const ciudades = dbMysql.define('ciudades',{
    
    CiudadID:{
        type: DataTypes.STRING
        }
    ,
    CiudadNombre: {
        type: DataTypes.STRING,
    }
    ,
    PaisCodigo: {
        type: DataTypes.STRING,
    } 
  
      
},{
    freezeTableName: true,
    tableName: 'ciudades',
    timestamps: false
  }
);

 module.exports = ciudades;
