const {DataTypes,Deferrable}  = require('sequelize');

const {dbMysql} = require('../../db/conection');

const tbproveedores = dbMysql.define('tbproveedores',{
    
    id:{
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
    },
    empresa: {
        type: DataTypes.STRING,
    },
    ciudad: {
        type: DataTypes.STRING,
    },
    pais: {
        type: DataTypes.STRING,
    },
    direccion: {
        type: DataTypes.STRING,
    },
    telefono: {
        type: DataTypes.STRING,
    } ,
    personacontacto: {
        type: DataTypes.STRING,
    } ,
    email: {
        type: DataTypes.STRING,
    },
    website: {
        type: DataTypes.STRING,
    },
    codePais: {
        type: DataTypes.STRING 
    },
    codeCiudad: {
        type: DataTypes.STRING 
    }  
  
      
},{
    freezeTableName: true,
    tableName: 'tbproveedores',
    timestamps: false
  }
);

 module.exports = tbproveedores;
