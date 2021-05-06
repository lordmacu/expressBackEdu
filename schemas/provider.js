var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var personSchema = new Schema(
  {
    name: String,
    contactForm: String,
    address: String,
    city: String,
    country: {
      type: Schema.Types.ObjectId,
      ref: "Country",
    },
    phone: String,
    email: String,
    web: String,
    active: Boolean,
        idPlatform:Number

  },
  {
    timestamps: true,
  }
);

module.exports = personSchema;
