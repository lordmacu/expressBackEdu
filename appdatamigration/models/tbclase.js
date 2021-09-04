const TBClase = require('../schemas/tbclase');

//const { Op } = require("sequelize");

const getTBClase = async() => { 

    try {

        const clases = await TBClase.findAll();

        return JSON.stringify(clases);

    } catch (error) {
        console.log(error);
        return error;
    }

};

const getTBClaseQuery = async() => { 

    try {

        const clases = await TBClase.sequelize.query('SELECT * FROM tbclase');

        return JSON.stringify(clases);

    } catch (error) {
        console.log(error);
        return error;
    }

};

const getTBEstudiantesClaseMaterias = async( idmateria) => { 

    try {

        const estudiantes = await TBClase.findAll({
            where: {
                idmateria 
            }
        });

        return JSON.stringify(estudiantes);

    } catch (error) {
        console.log(error);
        return error;
    }

};

module.exports = {
    getTBClase,
    getTBEstudiantesClaseMaterias,
    getTBClaseQuery
};