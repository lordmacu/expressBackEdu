const Country = require('../schemas/country');
const { getPais } = require('./pais');

const migrarPaisesCountry = async(  ) => { 
    
    const data = await getPais();
                
    const paises = JSON.parse(data);

    paises.map(async(pais) => {
        const res = await setCountry({

            name: pais.PaisNombreLocal,
            codeCountry: pais.PaisCodigo

        });
        console.log("Inserta:",res.name,res.codeCountry); 
    });
};

const getCountry = async( pais ) => { 

 try {
     const query = {name:pais};
     const res = await Country.find(query);
     return res;
 } catch (error) {
     return error;
 }

};

const setCountry = async( paises ) => { 

    try {
        const { name, codeCountry } = paises;
        const country = new Country({ 
                        name,
                        codeCountry, 
                        idPlatform: 1,
                        status: true 
                    });
        await country.save(); 

        return country;
    } catch (error) {
        console.log(error);
        return error;
    }
   
   };

module.exports = {
    getCountry,
    setCountry,
    migrarPaisesCountry
}

