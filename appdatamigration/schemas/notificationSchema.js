const {Schema, model} = require("mongoose");

const NotificationSchema = Schema({
    aggrement: {
        type: Schema.Types.ObjectId,
        ref: 'Aggrement'
    },
    name: {
        type: String,
    }, 
    description:{
        type: String,
    },status:{
        type: Boolean
    },idPlatform: {
        type: Number
    }

},{
    timestamps: true
});

module.exports = model('notificationSchema',NotificationSchema,'notificationSchema');



