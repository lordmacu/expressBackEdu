const DataTypes  = require('sequelize');

const {dbMysql} = require('../db/conection');

const tbpersona = dbMysql.define('tbpersona',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
    },
    nombre: {
        type: DataTypes.STRING,
    },
    apellidos: {
        type: DataTypes.STRING,
    },
    fechanac: {
        type: DataTypes.DATE,
    },
    sexo: {
        type: DataTypes.CHAR
    },
    ci: {
        type: DataTypes.STRING
    },
    dirdomicilio: {
        type: DataTypes.TEXT
    },
    diroficina: {
        type: DataTypes.TEXT
    },
    telefono: {
        type: DataTypes.STRING
    },
    movil: {
        type: DataTypes.STRING
    },
    email1: {
        type: DataTypes.STRING
    },
    email2: {
        type: DataTypes.STRING
    },
    ciudad: {
        type: DataTypes.STRING
    },
    codeCiudad: {
        type: DataTypes.STRING 
    },
    provincia: {
        type: DataTypes.STRING
    },
    cp: {
        type: DataTypes.STRING
    },
    pais: {
        type: DataTypes.STRING
    },
    codePais: {
        type: DataTypes.STRING 
    }
    ,
    foto: {
        type: DataTypes.STRING
    },
    curriculum: {
        type: DataTypes.TEXT
    },
    password: {
        type: DataTypes.STRING
    },
    comentario: {
        type: DataTypes.TEXT
    },
    titulo: {
        type: DataTypes.STRING
    },
    universidad: {
        type: DataTypes.STRING
    },
      
},{
    freezeTableName: true,
    tableName: 'tbpersona',
    timestamps: false
  }
);

 module.exports = tbpersona;
