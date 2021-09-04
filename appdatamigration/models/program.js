const {decode} = require('html-entities');

const Program = require('../schemas/program');
const Subject = require('../schemas/subject');
const { getAggrementByIdPlatform } = require('./aggrement');
const { getNotificationSchemaByIdPlatform } = require('./notificationSchema');
const { getPersonByIDPlatform } = require('./person');
const { getSubjectsByIdPlatform } = require('./subject');
const { getMateriaTutorByIdMateria } = require('./tbmateriatutor');
const { getMateriasByProgramaId } = require('./tbprogmaterias');
const {  getTBprogramasAll } = require('./tbProgramas');

const setProgram = async(programa)=>{
    try {
      
//console.log(programa);
       console.log(`Obteniendo Aggrement ${programa.sigla}:`);
       const dataAggrements = await getAggrementByIdPlatform(programa.idconvenio);
       let aggrementId = null;
       const aggrement = JSON.parse( dataAggrements);
       if (aggrement !== null){
            //console.log(aggrement.name);
            aggrementId = aggrement._id;
            //console.log( aggrement._id);
       }else{
            aggrementId = null;
       }
       
       //console.log(materia.id,materia.sigla,i+1,estado.name);

       console.log(`Obteniendo Notification Schema ${programa.sigla}:`);
       const dataNotifications = await getNotificationSchemaByIdPlatform(programa.idNotificacionEsquema);
       let notificationid = null;
       const notification = JSON.parse( dataNotifications);
       if (notification !== null ){
        notificationid = notification._id;
        //console.log(notification.name);
          
       }else{
            notificationid = null;
       }
                let coordinadoId = null;
                if (programa.idcoordinador !== null && programa.idcoordinador !== 0)
                {
                    const persons = await getPersonByIDPlatform(programa.idcoordinador);
                    const person = JSON.parse(persons);
                    if (person !== null)
                    {
                        coordinadoId = person._id;
                    }else{
                        coordinadoId = null;
                    }
                }
 
                const program = new Program({
                    sigla: programa.sigla,
                    name: programa.nombre,
                    description: decode(programa.description),
                    directorAcad: null,
                    coordinatorAcad: coordinadoId,
                    studentProfile: decode(programa.perfilestudiante),
                    title: decode(programa.titulacion),
                    price: programa.preciototal,
                    period: programa.periodo,
                    year: programa.anno,
                    startDate: programa.fechainicio,
                    endDate: programa.fechafin,
                    reglamento: '',
                    brochure: '',
                    approvationNote: programa.approvationNote,
                    idNotificacionEsquema: notificationid, 
                    agreement: aggrementId, 
                    active: true,
                    status: true,
                    idPlatform: programa.id
                    
            });
            console.log(programa.sigla);

             await program.save((err,doc)=>{
                 if (err) console.log(err);
             });

       return program;
    
        

    } catch (error) {
        console.log(error);
        return error;
    }
}

const setSubjectsProgram = async(id)=>{
try {

        const dataMaterias = await getMateriasByProgramaId(id);
        //console.log('Mierda',dataMaterias);
        const materias = JSON.parse(dataMaterias);

        
        
        materias.map( async(materia) => {
            const existeMateria = await getSubjectsByIdPlatform(materia.idmateria);
            //console.log(existeMateria);
            if (existeMateria.length === 0)
            {
               // console.log('No Existe', materia.id );
            }else{
    
               const program = await Program.findOne({idPlatform: materia.idprograma});

                 const subject = await Subject.findOne({idPlatform: materia.idmateria});
                    await program.subjects.push(subject._id);
                    console.log('Materia:',materia.idmateria);
                    await program.save();
            }
        });

               
} catch (error) {
    console.log(error);
}
}

const setTutorSubject = async(id)=>{
    try {
    
            const dataTutores = await getMateriaTutorByIdMateria(id);
            const tutores = JSON.parse(dataTutores);
          
                tutores.map( async(tutor,i) => {
                    const teachers = await getPersonByIDPlatform(tutor.idpersona);
                    const teacher = await JSON.parse(teachers);
                    const subject = await Subject.findOne({idPlatform: id})
                    if (i === 0){
                        subject.principalTutor = teacher._id;
                    }
                    await subject.tutors.push(teacher._id);
                    await subject.save();
                    console.log( subject.sigla,teacher._id);
                });
                   
    } catch (error) {
        console.log(error);
    }
    }

    const getProgramById = async( id )=>{
        try {
            const program = await Subject
            .findById({_id: id})
         
         ;
         return  JSON.stringify(program);
        } catch (error) {
            console.log();
        }
    }

    const getProgramByIdPlatform = async( id )=>{
        try {
            const program = await Subject
            .findOne({idPlatform: id})
         
         ;
         return  JSON.stringify(program);
        } catch (error) {
            console.log();
        }
    }
const getSubjects = async()=>{
    try {
        const subjects = await Subject
        .find()
        .populate('typeSubject','name')
        .populate('statusSubject','name')
        .populate('person','name')
        .populate('person','name')
     ;
     return  subjects;
    } catch (error) {
        console.log();
    }
}

const migrarProgram = async(  ) => { 
    
    const programas = await getTBprogramasAll();
    const programs = JSON.parse(programas);
    programs.map(async(program)=>{
       console.log(program.name);
        await setProgram(program);
    });
};

const popularSubjectProgram = async(  ) => {
    const programas = await getTBprogramasAll();
    const programs = JSON.parse(programas);
    programs.map(async(program)=>{
        console.log('Programa',program.nombre);
        await setSubjectsProgram(program.id);
    });
 };

module.exports = {
    setProgram,
    getSubjects,
       setTutorSubject,
    getProgramById,
    setSubjectsProgram,
    getProgramByIdPlatform,
    migrarProgram,
    popularSubjectProgram
}