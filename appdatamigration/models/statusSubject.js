const StatusSubject = require('../schemas/statusSubject');
const { getMaterias } = require('./tbMaterias');

const setStatusSubject = async( name ) => { 

    try {

        const statusSubject = new StatusSubject({ 
            name,
            status: true,
            idPlatform: 1
        });

        await statusSubject.save(); 

        return statusSubject;

    } catch (error) {
        console.log(error);
        return error;
    }
   
   };

   const getStatusSubjectByName = async( name ) => {
    try {
        const statusSubject = await StatusSubject.findOne({
            name
        });
        return JSON.stringify(statusSubject);
    } catch (error) {
        console.log(error);
    }
 };

 const migrarStatusSubject = async(  ) => { 
    console.log('Obteniendo y migrando estado-status');
    const filterEstado = {
        attributes: ['estado'],
        group: 'estado'
    }
    const dataEstado = await getMaterias(filterEstado);
    
    const estados = JSON.parse(dataEstado);

    estados.map(async(estado) => {
       const resEstado = await setStatusSubject(estado.estado.trim());
        console.log(":",resEstado.name); 
    });
 };

   module.exports = {
    setStatusSubject,
    getStatusSubjectByName,
    migrarStatusSubject
   }