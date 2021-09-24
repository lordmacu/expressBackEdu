var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var itemSchema = new Schema(
  {
    name: String,
    contactForm: String,
    address: String,
    city: {
      type: Schema.Types.ObjectId,
      ref: "City",
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: "Country",
    },
    phone: String,
    email: String,
    web: String,
    status: Boolean,
        idPlatform:Number

  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;
