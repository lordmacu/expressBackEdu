const Ciudad = require('../schemas/ciudad');

//const { Op } = require("sequelize");

const getCiudad = async() => { 

    try {
        
        const ciudades = await Ciudad.findAll({
            attributes: ['CiudadID', 'CiudadNombre','PaisCodigo']
        });

        return JSON.stringify(ciudades);

    } catch (error) {
        console.log(error);
        return error;
    }

};

module.exports = {
    getCiudad,
};