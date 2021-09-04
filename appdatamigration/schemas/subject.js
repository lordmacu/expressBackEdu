const {Schema, model} = require("mongoose");

const SubjectSchema = Schema({
  sigla: String,
  version: String,
  name: String,
  credits: Number,
  hours: Number,
  content: String,
  startDate: Date,
  endDate: Date,
  type: String,
  price: Number,
  status: Boolean,
  planAnalitico:String,
  active: Boolean,
  statusSubject: {
    type: Schema.Types.ObjectId,
    ref: "StatusSubject",
  },
  typeSubject: {
    type: Schema.Types.ObjectId,
    ref: "TypeSubject",
  },
  principalTutor: {
    type: Schema.Types.ObjectId,
    ref: "Person",
  },
   tutors : [
      {
        type: Schema.Types.ObjectId,
        ref:'Person'
      }
  ],
    students : [
      {
        type: Schema.Types.ObjectId,
        ref:'Person'
      }
  ],
      idPlatform:Number   

},{
    timestamps: true
});

module.exports = model('Subject',SubjectSchema,'subject');