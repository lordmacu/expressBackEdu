const City = require('../schemas/city');
const Country = require('../schemas/country');
const { getCiudad } = require('./ciudad');

const migrarCiudadesCity = async(  ) => { 
    
    const data = await getCiudad();
                
    const ciudades = JSON.parse(data);

    ciudades.map(async(ciudad) => {
        const res = await setCity({
           
            idCity: ciudad.CiudadID,
            name: ciudad.CiudadNombre,
            codeCountry: ciudad.PaisCodigo
            
        });
        console.log("Inserta:",res.idCity,res.name,res.codeCountry); 
    });
};

const getCity = async( pais ) => { 

 try {
     const query = {name:pais};
     const res = await City.find(query);
     return res;
 } catch (error) {
     return error;
 }

};

const setCity = async( ciudades ) => { 

    try {
        const { name, idCity, codeCountry } = ciudades;
        
        const country = await Country.findOne({
            codeCountry: codeCountry
        });

        if (!country)
        {
            console.log(`El pais ${country} no existe`); ;
        }

        const city = new City({ 
            idCity, 
            name,
            codeCountry,
            country: country._id,
            status: true 
        });

        await city.save(); 

        return city;

    } catch (error) {
        console.log(error);
        return error;
    }
   
   };

module.exports = {
    getCity,
    setCity,
    migrarCiudadesCity
}

