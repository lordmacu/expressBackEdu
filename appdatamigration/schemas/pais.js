const DataTypes  = require('sequelize');

const {dbMysql} = require('../db/conection');

const paises = dbMysql.define('paises',{
    
    PaisCodigo:{
            type: DataTypes.STRING
        }
    ,
    PaisNombreLocal: {
        type: DataTypes.STRING,
    }
    ,
    PaisContinente: {
        type: DataTypes.STRING,
    } ,
    PaisRegion: {
        type: DataTypes.STRING,
    } ,
    PaisArea: {
        type: DataTypes.STRING,
    } 
  
      
},{
    freezeTableName: true,
    tableName: 'paises',
    timestamps: false
  }
);

 module.exports = paises;
