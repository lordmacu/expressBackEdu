const TBNotificacionEsquema = require('../schemas/tbnotificacionesquema');
const { setNotificationSchema } = require('./notificationschema');


const getTBNotificacionEsquema = async() => { 

    try {

        const notificaciones = await TBNotificacionEsquema.findAll();

        return JSON.stringify(notificaciones);

    } catch (error) {
        console.log(error);
        return error;
    }

};

const migrarTBNotificacionEsquema = async()=>{
    try {

        const notificaciones = await getTBNotificacionEsquema();
        const notifications = JSON.parse(notificaciones);
        //console.log(notifications);
        notifications.map(async(notification)=>{
                const data = {
                    aggrement: notification.idConvenio,
                    name: notification.nombre,
                    description: notification.description,
                    status: notification.estado,
                    idPlatform: notification.id
                };

                const res = await setNotificationSchema(data);
                console.log(res);
        });
        
    } catch (error) {
        console.log(error);
    }
}

const getTBNotificacionEsquemaById = async( id) => { 

    try {

        const notificaciones = await TBNotificacionEsquema.findAll({
            where: {
                id 
            }
        });

        return JSON.stringify(notificaciones);

    } catch (error) {
        console.log(error);
        return error;
    }

};

module.exports = {
    migrarTBNotificacionEsquema,
    getTBNotificacionEsquema,
    getTBNotificacionEsquemaById
};