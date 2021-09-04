const {Schema, model} = require("mongoose");

const TypeSubjectSchema = Schema({
    name:String,
    value: String,
    status: Boolean,
        idPlatform:Number     

},{
    timestamps: true
});

module.exports = model('TypeSubject',TypeSubjectSchema,'typeSubject');