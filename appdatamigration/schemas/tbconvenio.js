const DataTypes  = require('sequelize');

const {dbMysql} = require('../db/conection');

const tbconvenio = dbMysql.define('tbconvenio',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        unique: true,
        type: DataTypes.INTEGER,
    },
    convenio: {
        type: DataTypes.STRING,
    },
    nombreCorto: {
        type: DataTypes.STRING,
    },
    estado: {
        type: DataTypes.INTEGER,
    }
      
},{
    freezeTableName: true,
    tableName: 'tbconvenio',
    timestamps: false
  }
);

 module.exports = tbconvenio;
