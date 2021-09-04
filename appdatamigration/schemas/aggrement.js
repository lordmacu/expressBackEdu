const {Schema, model} = require("mongoose");

const AggrementSchema = Schema({
    name: {
        type: String,
    },
    shortName: {
        type: String,//nombreCorto
    }, 
    idPlatform:{
        type: Number,
    },status:{
        type: Boolean
    }

},{
    timestamps: true
});

module.exports = model('Aggrement',AggrementSchema,'aggrement');