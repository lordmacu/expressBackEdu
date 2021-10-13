var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    name:String,
    sigla:String,
    directorAcad:{
        type:Schema.Types.ObjectId,
        ref:"Person"
    },
    coordinatorAcad:{
        type:Schema.Types.ObjectId,
        ref:"Person"
    },
    price:Number,
    numberCredits:Number,
    approvalNote: Number,
    nroSubjects: Number,
    agreement:{
        type:Schema.Types.ObjectId,
        ref:"Aggrement"
    },
    reglamento: String,
    brochure:String,
    presupuesto:String,
    title:String,
    description:String,
    studentProfile: String,
    observation: String,
    status: Boolean,

    period:Number,
    year:Number,
    startDate:Date,
    endDate: Date,
    idPlatform: Number
    // subjects : [
    //     {type: Schema.Types.ObjectId,ref:'Subject'}
    // ],


}, {
    timestamps: true
});

module.exports = itemSchema;