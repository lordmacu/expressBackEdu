const Country = require('../../schemas/relational/country');

const getCountryByID = async(id) => { 

 try {
     return await Country.findById(id);
 } catch (error) {
    console.log(error); 
    return error;
 }

};

module.exports = {
    getCountryByID
}

