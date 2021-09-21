



const NotificationSchema = require('../schemas/notificationschema');
const { getAggrementByIdPlatform } = require('./aggrement');

const setNotificationSchema = async( data ) => { 

    try {

        const { aggrement,
            name,
            description,
            status,
            idPlatform } = data;
            
            const convenios = await getAggrementByIdPlatform(aggrement);
            const convenio = JSON.parse(convenios)
                //console.log(convenios._id);

        const notificationSchema = new NotificationSchema({ 
                aggrement: convenio._id,
                name,
                description,
                status,
                idPlatform
            });

        await notificationSchema.save(); 

        return notificationSchema;

    } catch (error) {
        console.log(error);
        return error;
    }
   
   };

   const getNotificationSchemaByName = async( name ) => {
       try {
           const notificationSchema = await NotificationSchema.findOne({
               name
           });
           return JSON.stringify(notificationSchema);
       } catch (error) {
           console.log(error);
       }
    };

    const getNotificationSchemaById= async( id ) => {
        try {
            const notificationSchema = await NotificationSchema.findOne({
                _id: id
            });
            return JSON.stringify(notificationSchema);
        } catch (error) {
            console.log(error);
        }
     };

     const getNotificationSchemaByIdPlatform= async( id ) => {
        try {
            const notificationSchema = await NotificationSchema.findOne({
                idPlatform: id
            });
            return JSON.stringify(notificationSchema);
        } catch (error) {
            console.log(error);
        }
     };

   module.exports = {
    setNotificationSchema,
    getNotificationSchemaByIdPlatform,
    getNotificationSchemaByName,
    getNotificationSchemaById
   }