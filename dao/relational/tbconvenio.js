const TBconvenio = require('../schemas/tbconvenio');
const { Op } = require("sequelize");

const getTBconvenioAll  = async() =>  {

    try {

        const convenios = await TBconvenio.findAll();
          
         return JSON.stringify(convenios);
        
    } catch (error) {
        return error;
    }
}

const getTBconvenioByID  = async( id ) =>  {

    try {

        const convenios = await TBconvenio.findAll({
            where:{
                id: id
            }
        });
          
         return JSON.stringify(convenios);
        
    } catch (error) {
        return error;
    }
}



module.exports = {
    getTBconvenioAll,
    getTBconvenioByID
}