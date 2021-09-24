
const Provider = require("../../dao/providersBooks");

const getProviderByIdPlatform  = async(idPlatform) =>  {

    try {
        return await Provider.findOne({idPlatform});
        
    } catch (error) {
        console.log(error);
        return error;
    }
}

const getProviderById  = async(id) =>  {

    try {
        return await Provider.findById(id);
        
    } catch (error) {
        console.log(error);
        return error;
    }
}


module.exports = {
    getProviderByIdPlatform,
    getProviderById
}