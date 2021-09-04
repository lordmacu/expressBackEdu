const TypeSubject = require('../schemas/typeSubject');
const { getMaterias } = require('./tbMaterias');

const setTypeSubject = async( name ) => { 

    try {

        const typeSubject = new TypeSubject({ 
            name,
            status: true,
            idPlatform: 1
        });

        await typeSubject.save(); 

        return typeSubject;

    } catch (error) {
        console.log(error);
        return error;
    }
   
   };

   const getTypeSubjectByName = async( name ) => {
       try {
           const typeSubject = await TypeSubject.findOne({
               name
           });
           return JSON.stringify(typeSubject);
       } catch (error) {
           console.log(error);
       }
    };

    const migrarTypeSubject = async(  ) => {
        console.log('Obteniendo y migrando tipo-type');
        const filterTipo = {
            attributes: ['tipo'],
            group: 'tipo'
        }
        const dataTipo = await getMaterias(filterTipo);
        
        const tipos = JSON.parse(dataTipo);

        tipos.map(async(tipo) => {
           const resTipo = await setTypeSubject(tipo.tipo.trim());
            console.log("Insert->",resTipo.name); 
        });
     };

   module.exports = {
    setTypeSubject,
    getTypeSubjectByName,
    migrarTypeSubject
   }