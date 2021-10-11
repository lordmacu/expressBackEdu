var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var itemSchema = new Schema(
  {
    sigla: String,
    version: String,
    name: String,
    credits: Number,
    hours: Number,
    content: String,
    type: String,
    price: Number,
    status: String,
    planAnalitico:String,
    startDate: Date,
    endDate: Date,
    active: Boolean,
    statusSubject: {
      type: Schema.Types.ObjectId,
      ref: "statusSubjects",
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "typesSubjects",
    },
    principalTutor: {
      type: Schema.Types.ObjectId,
      ref: "Tutor",
    },
     tutors : [
        {type: Schema.Types.ObjectId,ref:'Tutor'}
    ],
      students : [
        {type: Schema.Types.ObjectId,ref:'Person'}
    ],
        idPlatform:Number

  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;


//614272af375612640c182d2e

//614272af375612640c182d2d
