var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personSchema = new Schema({
    sigla:String,
  
   name:String,
    agreement:{
        type:Schema.Types.ObjectId,
        ref:"Aggrement"
    },
    description:String,
    directorAcad:{
        type:Schema.Types.ObjectId,
        ref:"Person"
    },
    coordinatorAcad:{
        type:Schema.Types.ObjectId,
        ref:"Person"
    },
    studentProfile: String,
    name: String,
    reglamento: String,
    brochure:String,
    title:String,
    price:Number,
    period:Number,
    year:Number,
    startDate:Date,
    endDate: Date,
    active: Boolean,
    idPlatform: Number,
    subjects : [
        {type: Schema.Types.ObjectId,ref:'Subject'}
    ],


}, {
    timestamps: true
});

module.exports = personSchema;