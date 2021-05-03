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
    status: String,
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
  },
  {
    timestamps: true,
  }
);

module.exports = personSchema;
