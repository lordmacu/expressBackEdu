const {Schema, model} = require("mongoose");

const StatusSubjectSchema = Schema({
    name:String,
    value: String,
    status: Boolean,
    idPlatform:Number       

},{
    timestamps: true
});

module.exports = model('StatusSubject',StatusSubjectSchema,'statusSubject');