const {decode} = require('html-entities');

const Subject = require('../schemas/subject');
const { getPersonByIDPlatform } = require('./person');
const { getStatusSubjectByName } = require('./statusSubject');
const { getTBEstudiantesClaseMaterias } = require('./tbclase');
const { getMaterias } = require('./tbMaterias');
const { getMateriaTutorByIdMateria } = require('./tbmateriatutor');
const { getTypeSubjectByName } = require('./typeSubject');
const setSubject = async(materia)=>{
    try {
        let arrayTutores = [];
        let arrayStudents = [];


       console.log(`Obteniendo estados ${materia.sigla}:`);
       const dataEstados = await getStatusSubjectByName(materia.estado);
       const estado = JSON.parse( dataEstados);
       const statusId = estado._id;
       //console.log(materia.id,materia.sigla,i+1,estado.name);

       console.log(`Obteniendo tipos ${materia.sigla}:`);
       const dataTipos = await getTypeSubjectByName(materia.tipo);
       const tipo = JSON.parse( dataTipos);
       const typeId = tipo._id;
        // if (materia.id == 5806){

        //     console.log(materia.sigla,materia.tipo, typeId);
        // }
 
                const subject = new Subject({
                    sigla: materia.sigla,
                    version: materia.version,
                    name: materia.nombre,
                    credits: materia.creditos,
                    hours: materia.horas,
                    content: decode(materia.contenidos),
                    startDate: materia.fechainicio,
                    endDate: materia.fechafinal,
                    price: 0,
                    planAnalitico: '',
                    active: true,
                    status: true,
                    statusSubject: statusId,
                    typeSubject: typeId,
                    principalTutor: null,
                    tutors: arrayTutores,
                    //students: arrayStudents,
                    idPlatform: materia.id

                    
            });

             await subject.save((err,doc)=>{
                 if (err) console.log(err);
             });

        return subject;
    
        

    } catch (error) {
        console.log(error);
        return error;
    }
}

const setStudentsSubject = async(id)=>{
try {

        const dataEstudiantes = await getTBEstudiantesClaseMaterias(id);
        const estudiantes = JSON.parse(dataEstudiantes);
        estudiantes.map( async(estudiante,i) => {
        const students = await getPersonByIDPlatform(estudiante.idpersona);
        const student = await JSON.parse(students);

        const subject = await Subject.findOne({idPlatform: id})
        await subject.students.push(student._id);
        await subject.save();
        console.log( subject.sigla,student._id);

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

    const getSubjectsByIdPlatform = async(id)=>{
        try {
            const subjects = await Subject
            .findOne({ idPlatform: id });
         ;
         return  subjects;
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

const migrarTBMateriasSubject = async(  ) => { 
    console.log('Obteniendo todas las materias');
              
                    const dataMaterias = await getMaterias();
                    
                    const materias = JSON.parse(dataMaterias);
            
                    materias.map(async(materia, i) => {

                    const res = setSubject(materia);
                 

                });
};

const popularEstuduantesSubject = async(  ) => { 
    console.log('Obteniendo todas las materias');
              
                       
    const dataMaterias = await getMaterias();
    
    const materias = JSON.parse(dataMaterias);

    materias.map(async(materia, i) => {

                await setStudentsSubject(materia.id);

});
};

const popularTutoresSubject = async(  ) => { 
    console.log('Obteniendo todas las materias');
              
                       
    const dataMaterias = await getMaterias();
    
    const materias = JSON.parse(dataMaterias);

    materias.map(async(materia, i) => {
        
        await setTutorSubject(materia.id);

});
};

module.exports = {
    setSubject,
    getSubjects,
    setStudentsSubject,
    setTutorSubject,
    getSubjectsByIdPlatform,
    migrarTBMateriasSubject,
    popularEstuduantesSubject,
    popularTutoresSubject
}