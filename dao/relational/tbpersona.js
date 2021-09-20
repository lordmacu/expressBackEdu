// var mongoose = require('mongoose');
//MYSQL
const Tbpersona = require('../schemas/tbpersona');
const Pais = require('../schemas/pais');
const Ciudad = require('../schemas/ciudad');
const { Op } = require("sequelize");

const dataPersonaPais = require('../helpers/depurationPersonaPais');
const dataPersonaCiudad = require('../helpers/depurationPersonaCiudad');

const depurarTBPersona = ()=>{
    const datas = dataPersonaPais;
    datas.map((p) => {
        const dataCorrect=p['replace'];
        const repe = p['val'];
         repe.map( async(o) => {
             const dataIncorrect=o;
             await updateTBpersonaPais(dataCorrect,dataIncorrect);
         });
     })
}

const guardarPaisesEnTBPersona = async(  ) => {
                    
                    const data = await getTBpersonasAll();

                    const personas = JSON.parse(data);

                    personas.map(async(persona) => {

                         const res = await getPaisByName(persona.pais);

                         const pais =  JSON.parse(res);

                         if (pais.length > 0)
                         {
                            console.log(persona.nombre,persona.pais,persona.codePais);
                            await updateTBpersonaPaisCodigo(persona.id,pais[0].PaisCodigo,persona.pais);

                            console.log(persona.id,pais[0].PaisCodigo,persona.pais);
                         }else{
                            console.info('No Match',persona.nombre,persona.pais,persona.codePais);
                         }

                    });
 };

const uptadeCapitaliceTBpersona = async(  ) => {

    try {
        
        await Tbpersona.sequelize.query('ALTER TABLE `tbpersona` CHANGE `fechanac` `fechanac` DATE NOT NULL');
        await Tbpersona.sequelize.query('ALTER TABLE tbpersona CONVERT TO CHARACTER SET utf8 COLLATE utf8_bin');
        await Tbpersona.sequelize.query('UPDATE tbpersona SET pais = CONCAT(UCASE(LEFT(pais, 1)), SUBSTRING(pais, 2))');
        await Tbpersona.sequelize.query('UPDATE tbpersona SET ciudad = CONCAT(UCASE(LEFT(ciudad, 1)), SUBSTRING(ciudad, 2))');
        await Tbpersona.sequelize.query("UPDATE tbpersona SET fechanac = '1970-01-01' WHERE fechanac = '0000-00-00'");
        await Tbpersona.sequelize.query("UPDATE tbpersona SET ciudad = 'Santa Cruz' WHERE ciudad IS NULL");

        
    } catch (error) {
        console.log(error);
        return error
    }

 };

 const getPaisByName = async(pais) => { 
    try {

       const paises = await Pais.findAll({

            attributes: ['PaisCodigo', 'PaisNombreLocal'],
            where: {
                PaisNombreLocal: pais
              }
          
       });

       return  JSON.stringify(paises);

    } catch (error) {
        console.log(error);
        return error;
    }

 };

 const getPersonaByID = async( id ) => { 
    try {

       const personas = await Tbpersona.findAll({

            attributes: ['CiudadID','CiudadNombre', 'PaisCodigo'],
            where: {
               id: id
              }
          
       });

       return  JSON.stringify(personas);

    } catch (error) {
        console.log(error);
        return error;
    }

 };

 const getCiudadByName = async(ciudad,codePais) => { 
    try {

       const ciudades = await Ciudad.findAll({

            attributes: ['CiudadID','CiudadNombre', 'PaisCodigo'],
            where: {
                PaisCodigo: codePais,
                CiudadNombre: {
                    [Op.substring]: ciudad
                }
              }
          
       });

       return  JSON.stringify(ciudades);

    } catch (error) {
        console.log(error);
        return error;
    }

 };

const getTBpersonasAll  = async() =>  {

    try {

        const personas = await Tbpersona.findAll();
          
         return JSON.stringify(personas);
        
    } catch (error) {
        return error;
    }
}

const getTBpersonasPaisesAll  = async() =>  {

    try {

        const personas = await Tbpersona.findAll({
            group: 'pais'
          });
          
         return JSON.stringify(personas);
        
    } catch (error) {
        return error;
    }
}




const getTBpersona  = async() =>  {

    try {

        const personas = await Tbpersona.findAll({
            attributes: ['id','nombre','apellidos','pais'],
            offset: 0, 
            limit: 4000,
            order: [
                ['id', 'ASC']
            ],
        });
          
        return JSON.stringify(personas);
        // return personas;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getTBpersonasPais  = async(data) =>  {

    try {

        const personas = await Tbpersona.sequelize.query('Select pais FROM tbpersona GROUP BY pais COLLATE utf8_bin',
                                { type: QueryTypes.SELECT });
          
         return JSON.stringify(personas);
        
    } catch (error) {
        return error;
    }
}

const updateTBpersonaPais  = async(dataCorrect,dataIncorrect) =>  {

    try {

        const personas = await Tbpersona.update({ 
            pais: dataCorrect }, {
                where: {
                  pais: dataIncorrect
                }
              }
        );
          
         return JSON.stringify(personas,null,2);
        
    } catch (error) {
        return error;
    }
}

const updateTBpersonaCiudad  = async(dataCorrect,dataIncorrect) =>  {

    try {

        const personas = await Tbpersona.update({ 
            ciudad: dataCorrect }, {
                where: {
                  ciudad: dataIncorrect
                }
              }
        );
          
         return JSON.stringify(personas,null,2);
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

const updateTBpersonaPaisCodigo  = async(id,codigo,pais) =>  {

    try {

        const personas = await Tbpersona.update({ 
            codePais: codigo }, {
                where: {
                  codePais: '',
                  pais: pais,
                  id: id
                  
                }
              }
        );
          
         return personas;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

const updateTBpersonaPaisCiudadCodigo  = async(id,codePais,codeCiudad) =>  {

    try {

        const personas = await Tbpersona.update({ 
            codeCiudad: codeCiudad }, {
                where: {
                  id: id,
                  codePais: codePais
                 
                }
              }
        );
          
         return personas;
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

const depurarCiudadesEnTBPersona = (  ) => {
    const datas = dataPersonaCiudad;
    datas.map((p) => {
        const dataCorrect=p['replace'];
        const repe = p['val'];
         repe.map( async(o) => {
             const dataIncorrect=o;
             await updateTBpersonaCiudad(dataCorrect,dataIncorrect);
         });
     })
 };


 const buscarActualizarCiudadesTBPersona = async(  ) => { 
    const data = await getTBpersonasAll();

    const personas = JSON.parse(data);

    personas.map(async(persona) => {

         const res = await getCiudadByName(persona.ciudad,persona.codePais);

         const ciudad =  JSON.parse(res);

         if (ciudad.length > 0)
         {
            console.log(persona.nombre,persona.pais,persona.codePais,persona.ciudad,persona.codeCiudad);
            
            await updateTBpersonaPaisCiudadCodigo(persona.id, ciudad[0].PaisCodigo, ciudad[0].CiudadID);

            console.log(persona.id,persona.nombre,persona.apellidos, ciudad[0].PaisCodigo, ciudad[0].CiudadID);
         }else{

            const resAux = await getCiudadByName('Otra',persona.codePais);
            const ciudadOtra =  JSON.parse(resAux);
            await updateTBpersonaPaisCiudadCodigo(persona.id, ciudadOtra[0].PaisCodigo, ciudadOtra[0].CiudadID);

            console.info('No Match',persona.id,persona.nombre,persona.apellidos);
         }

    });
 };

 const listarPerson = async(  ) => { 
    const data = await getPerson();
                    
    const people = JSON.parse(data);

    people.map(async(person) => {
        console.log(person); 
    });
 };
module.exports = {
    getPaisByName,
    getCiudadByName,
    getTBpersona,
    getTBpersonasAll,
    getTBpersonasPais,
    getTBpersonasPaisesAll,
    updateTBpersonaPais,
    updateTBpersonaCiudad,
    uptadeCapitaliceTBpersona,
    updateTBpersonaPaisCodigo,
    updateTBpersonaPaisCiudadCodigo,
    getPersonaByID,
    depurarTBPersona,
    guardarPaisesEnTBPersona,
    depurarCiudadesEnTBPersona,
    buscarActualizarCiudadesTBPersona,
    listarPerson
};


   