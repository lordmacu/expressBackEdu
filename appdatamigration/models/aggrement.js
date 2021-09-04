const Aggrement = require('../schemas/aggrement');
const { setStatusSubject } = require('./statusSubject');
const { getTBconvenioAll } = require('./tbConvenio');

const setAggrement = async( {name, shortname,status,idPlatform} ) => { 

    try {

        const aggrement = new Aggrement({ 
            name,
            shortname,
            status,
            idPlatform
        });

        await aggrement.save(); 

        return aggrement;

    } catch (error) {
        console.log(error);
        return error;
    }
   
   };

   const getAggrementByShortname = async( shortname ) => {
    try {
        const aggrement = await Aggrement.findOne({
            shortname
        });
        return JSON.stringify(aggrement);
    } catch (error) {
        console.log(error);
    }
 };

 const getAggrementById = async( id ) => {
    try {
        const aggrement = await Aggrement.findById(id);
        return JSON.stringify(aggrement);
    } catch (error) {
        console.log(error);
    }
 };
 const getAggrementByIdPlatform = async( idPlatform ) => {
    try {
        const aggrement = await Aggrement.findOne({idPlatform});
        return JSON.stringify(aggrement);
    } catch (error) {
        console.log(error);
    }
 };

 const getAggrementAll = async(  ) => {
    try {
        const aggrement = await Aggrement.find();
        return JSON.stringify(aggrement);
    } catch (error) {
        console.log(error);
    }
 };

 const migrarAggrement = async(  ) => { 
    console.log('Obteniendo y migrando tbconvenio-aggrement');
              
    const dataConvenio = await getTBconvenioAll();
    
    const convenios = JSON.parse(dataConvenio);

    convenios.map(async(convenio) => {
        const aggrement = {
            name: convenio.convenio,
            shortname: convenio.nombreCorto,
            status: convenio.estado,
            idPlatform: convenio.id
        };
       const resAggrement = await setAggrement(aggrement);
        console.log(resAggrement.name); 
    });
 };

   module.exports = {
    setAggrement,
    getAggrementAll,
    getAggrementById,
    getAggrementByIdPlatform,
    getAggrementByShortname,
    migrarAggrement
   }