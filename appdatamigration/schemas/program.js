const {Schema, model} = require("mongoose");

const ProgramSchema = Schema({
    sigla:String,
  
    name:String,
     
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
    
    title:String,
    price:Number,
    period:Number,
    year:Number,
    startDate:Date,
    endDate: Date,
    reglamento: String,
    brochure:String,
    approvationNote: Number,
    idNotificacionEsquema:{
        type:Schema.Types.ObjectId,
        ref:"NotificationSchema"
    },
    
    agreement:{
        type:Schema.Types.ObjectId,
        ref:"Aggrement"
    },
     active: Boolean,

     idPlatform: Number,
     subjects : [
         {
            type: Schema.Types.ObjectId,
            ref:'Subject'
        }
     ],
     status: Boolean   

},{
    timestamps: true
});

module.exports = model('Program',ProgramSchema,'program');