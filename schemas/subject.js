var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var personSchema = new Schema(
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
    status: {
      type: Schema.Types.ObjectId,
      ref: "Status",
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "Type",
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

module.exports = personSchema;
