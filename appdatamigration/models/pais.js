const Pais = require('../schemas/pais');
const { getTBpersonasPaisesAll } = require('./tbPersona');

//const { Op } = require("sequelize");

const listarPaisesDepurados = async(  ) => { 

    const data = await getTBpersonasPaisesAll();
                
    const personas = JSON.parse(data);

    personas.map(async(pais,i) => {
        
        console.log(`${(i+1)}.-`.green,pais.pais); 
    });
};

const getPais = async() => { 

    try {

        const paises = await Pais.findAll({
            attributes: ['PaisCodigo', 'PaisNombreLocal']
        });

        return JSON.stringify(paises);

    } catch (error) {
        console.log(error);
        return error;
    }

};

module.exports = {
    getPais,
    listarPaisesDepurados
};