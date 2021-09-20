const Ratings = require('../schemas/ratings');
const { getTBClase, getTBClasePagination} = require('./tbclase');
const Program = require('../schemas/program');
const Subject = require('../schemas/subject');
const Person = require('../schemas/person');
const {
    guardarDB, 
    leerDB
} = require('../helpers/guardarArchivo');

const setRatings = async(offset,limit) => { 

    try {

        const noMatch = [];
        const calificaciones = await getTBClasePagination(offset, limit);
        //console.log(calificaciones.length);
        const ratings = JSON.parse(calificaciones);

        ratings.map((rating,i) =>{
            if (i==0 || i==ratings.length-1)
            {
                console.log({rating});
            }
         

        }) 
    
        ratings.map(async(grade,i) =>{

            

            const program = await Program.findOne({idPlatform: grade.idprograma});

            const subject = await Subject.findOne({idPlatform: grade.idmateria});

            const person = await Person.findOne({idPlatform: grade.idpersona});

            //console.log(program);

            if (program && subject && person )
            {
                console.log(grade.id,program.sigla, subject.sigla,person._id,grade.nota);
                    const data = {
                    program: program._id,
                    subject: subject._id,
                    person: person._id,
                    grade: grade.nota,
                    idPlatform: grade.id,
                    status: true
                };
         
              await setRating(data);

            }else{
                console.log('No match',grade.id,program.sigla, subject.sigla,person._id,grade.nota);
                noMatch.push({
                        Desc:'No Match',
                        gradeid: grade.id,
                        programid: grade.idprograma,
                        subjectid: grade.idmateria,
                        personid: grade.idpersona,
                        grade: grade.nota
                    })
                guardarDB(noMatch);

            }


 
        });

       

    } catch (error) {
        console.log(error);
        return error;
    }

};

const setRating = async(data) =>{

    try {

        const ratings = new Ratings(data);
        ratings.save();

    } catch (error) {
        console.log(error);
    }

}

module.exports = {
    setRatings,
};