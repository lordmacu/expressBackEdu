const City = require('../../schemas/relational/country');

const getCityByID = async(id) => { 

 try {
     return await City.findById(id);
 } catch (error) {
    console.log(error); 
    return error;
 }

};

module.exports = {
    getCityByID
}
