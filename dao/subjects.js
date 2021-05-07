var mongoose = require("mongoose");
var itemSchema = require("../schemas/subject");
const mongoosePaginate = require("mongoose-paginate-v2");

itemSchema.statics = {
  create: function (data, cb) {
    var item = new this(data);
    item.save(cb);
  },

  get: function (query, cb) {
    this.findOne(query, cb)
      .populate("status")
      .populate("type")
      .populate("principalTutor")
      .populate("tutors")
      .populate("students")

      .populate("agreement");
  },

  getSimple: function (query, cb) {
    this.findOne(query, cb);
  },

  addStudent: async function (query, cb) {
    const subject = await this.findById(query.subject, cb);
    subject.students.push(query.selectedStudent._id);
    subject.save();
  },
  addTutor: async function (query, cb) {
    const subject = await this.findById(query.subject, cb);
    subject.tutors.push(query.tutorSelected._id);
    console.log(query, "query");
    if (query.isPrincipalTeacher) {
      subject.principalTutor = query.tutorSelected._id;
    }

    if (!subject.principalTutor) {
      subject.principalTutor = query.tutorSelected._id;
    }
    subject.save();
  },

  setPrincpalTeacher: async function (query, cb) {
    const subject = await this.findById(query.subject, cb);
    subject.principalTutor = query.teacher;

    subject.save();
    },
    
   deleteStudent: async function (query, cb) {
    const subject = await this.findById(query.subject, cb);
    const results = subject.students.filter((word) => word != query.student);
     
    subject.students = results;

    subject.save();
  },
  removeTutor: async function (query, cb) {
    const subject = await this.findById(query.subject, cb);
    const results = subject.tutors.filter((word) => word != query.teacher);
    if (subject.principalTutor == query.teacher) {
      if (results.length > 0) {
        subject.principalTutor = results[0];
      } else {
        subject.principalTutor;
      }
    }
    subject.tutors = results;

    subject.save();
  },

  getByName: function (query, cb) {
    this.find(query, cb);
  },

  update: function (query, updateData, cb) {
    this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
  },

  delete: function (query, cb) {
    this.findOneAndDelete(query, cb);
  },
};
itemSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Subject", itemSchema);
