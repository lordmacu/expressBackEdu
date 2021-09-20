const TBmaterias = require('../schemas/tbmaterias');
const { Op } = require("sequelize");
const dataMaterias = require('../helpers/depurationMaterias');
const getMaterias  = async(filter) =>  {

    try {
        if (filter){

            const materias = await TBmaterias.findAll(filter);
            return JSON.stringify(materias);
        }else{
            const materias = await TBmaterias.findAll();
            // {
            //     where: {
            //         id: {
            //         [Op.gt]: 5800
            //         }
            // }
            // }
            return JSON.stringify(materias);
        }
          
         
        
    } catch (error) {
        console.log(error);
        return error;
    }
}



const getTBconvenioByID  = async( id ) =>  {

    try {

        const convenios = await TBconvenio.findAll({
            where:{
                id: id
            }
        });
          
         return JSON.stringify(convenios);
        
    } catch (error) {
        return error;
    }
}

const corregirMateriaName = async(dataCorrect,dataIncorrect) =>{
try {
    //UPDATE `tabla` SET campo = REPLACE(campo,'texto a buscar','nuevo texto') WHERE fecha BETWEEN '2012-06-01' AND '2012-06-31';
    const res = await TBmaterias.sequelize.query(`UPDATE tbmaterias SET nombre = REPLACE(nombre,'${dataIncorrect}','${dataCorrect}') `);
    await TBmaterias.sequelize.query('UPDATE tbmaterias SET nombre = CONCAT(UCASE(LEFT(nombre, 1)), SUBSTRING(nombre, 2))');

    return JSON.stringify(res);
} catch (error) {
    console.log(error); 
}
}

const depurarTBMateriaName = (  ) => {
          
                            
    const datas = dataMaterias;
    datas.map((p) => {
        const dataCorrect=p['replace'];
        const repe = p['val'];
         repe.map( async(o) => {
             const dataIncorrect=o;
             await corregirMateriaName(dataCorrect,dataIncorrect);
         });
     });
 };

module.exports = {
    getMaterias,
    getTBconvenioByID,
    corregirMateriaName,
    depurarTBMateriaName
}