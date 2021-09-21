const TBMateriaTutor = require('../schemas/tbmateriatutor');

//const { Op } = require("sequelize");

const getMateriasTutor = async() => { 

    try {

        const clases = await TBMateriaTutor.findAll();

        return JSON.stringify(clases);

    } catch (error) {
        console.log(error);
        return error;
    }

};

const getMateriaTutorByIdMateria = async( idmateria) => { 

    try {

        const materias = await TBMateriaTutor.findAll({
            where: {
                idmateria 
            }
        });

        return JSON.stringify(materias);

    } catch (error) {
        console.log(error);
        return error;
    }

};

module.exports = {
    getMateriasTutor,
    getMateriaTutorByIdMateria
};