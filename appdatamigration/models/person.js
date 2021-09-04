// const capitaliceFirstCharacter = require('../helpers/capitaliceFirstCharacter');
const Person = require('../schemas/person');
const Country = require('../schemas/country');
const City = require('../schemas/city');
const { getTBpersonasAll } = require('./tbPersona');


const setPersonMongo = async(data)=>{
    try {
        const {
            id,
            nombre,
            apellidos,
            fechanac,
            sexo,
            ci,
            dirdomicilio,
            diroficina,
            telefono,
            movil,
            email1,
            email2,
            ciudad,
            codeCiudad,
            provincia,
            cp,
            codePais,
            foto,
            curriculum,
            password,
            comentario,
            titulo,
            universidad
        } = data;
        

        const country = await Country.findOne({codeCountry: codePais});

        if (!country){
            return `El país: ${country} no existe`;
        }

        const city = await City.findOne({idCity: codeCiudad});

        if (!city){
            return `La ciudad: ${city} no existe`;
        }

        //console.log(country._id,country.name,city._id,city.name,city.idCity);
        


        const person = new Person({
            name: nombre,
            lastName: apellidos,
            active: 1,
            birthday: fechanac,
            gender: sexo,
            dni: ci,
            addressHome: dirdomicilio,
            addressOffice: diroficina,
            city: city._id,
            state: ciudad,
            province: provincia,
            zipCode: cp,
            country: country._id,
            principalEmail: email1,
            secundaryEmail: email2,
            phone: telefono,
            mobile: movil,
            title: titulo,
            university: universidad,
            image: foto,
            curriculum: curriculum,
            password: password,
            commentary: comentario,
            status: true,
            idPlatform: id
        });

        await person.save();

        return person;

    } catch (error) {
        console.log(error);
        return error;
    }
}


const getPerson = async() => {

    try {
       const person = await Person
            .find()
            .populate('country','name')
            .populate('city','name')
       ;
       return  JSON.stringify(person);
    } catch (error) {
        console.log(error);
    }

}

const getPersonByID = async(id) => {

    try {
       const person = await Person
            .findById()
       ;
       return  JSON.stringify(person);
    } catch (error) {
        console.log(error);
    }

}

const getPersonByIDPlatform = async(id) => {

    try {
       const person = await Person
            .findOne({
                idPlatform: id
            })
       ;
       return  JSON.stringify(person);
    } catch (error) {
        console.log(error);
    }

}

const migrarPersonaPerson = async(  ) => {

    const data = await getTBpersonasAll();

    const personas = JSON.parse(data);

    personas.map(async(persona) => {

            const res = await setPersonMongo(persona);
            console.log("Inserta:",res._id,res.name,res.lastName); 

     });
 };

module.exports = {
    setPersonMongo,
    getPerson,
    getPersonByID,
    getPersonByIDPlatform,
    migrarPersonaPerson
}