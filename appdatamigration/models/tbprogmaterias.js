const Tbprogmaterias = require('../schemas/tbprogmaterias');

const getMateriasByProgramaId = async( id )=>{
    try {
        const materias = await Tbprogmaterias.findAll({
            where: {
                idprograma: id
                }
        });
       // console.log(materias);
        return JSON.stringify(materias);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getMateriasByProgramaId
}
