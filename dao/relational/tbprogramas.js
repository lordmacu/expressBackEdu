const Tbprogramas = require('../schemas/tbprogramas');
const { Op } = require("sequelize");
const dataPrograma = require('../helpers/depurationPrograma');

const getTBprogramasAll  = async() =>  {

    try {

        const programas = await Tbprogramas.findAll();
          
         return JSON.stringify(programas);
        
    } catch (error) {
        console.log(error);
    }
}

const getTBprogramasById  = async(id) =>  {

    try {

        const programas = await Tbprogramas.findAll({
            where: { id }
        });
          
         return JSON.stringify(programas);
        
    } catch (error) {
        console.log(error);
    }
}

const depurarTBProgramasName = (  ) => {
          
                            
    const datas = dataPrograma;
    datas.map((p) => {
        const dataCorrect=p['replace'];
        const repe = p['val'];
         repe.map( async(o) => {
             const dataIncorrect=o;
             await corregirProgramaName(dataCorrect,dataIncorrect);
         });
     });
 };

 const corregirProgramaName = async(dataCorrect,dataIncorrect) =>{
    try {
        //UPDATE `tabla` SET campo = REPLACE(campo,'texto a buscar','nuevo texto') WHERE fecha BETWEEN '2012-06-01' AND '2012-06-31';
        const res = await Tbprogramas.sequelize.query(`UPDATE tbprogramas SET nombre = REPLACE(nombre,'${dataIncorrect}','${dataCorrect}') `);
        await Tbprogramas.sequelize.query('UPDATE tbprogramas SET nombre = CONCAT(UCASE(LEFT(nombre, 1)), SUBSTRING(nombre, 2))');
    
        return JSON.stringify(res);
    } catch (error) {
        console.log(error); 
    }
    }

module.exports = {
    getTBprogramasAll,
    getTBprogramasById,
    depurarTBProgramasName
}