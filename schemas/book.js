var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var itemSchema = new Schema(
  {
    title: String,
    edition: String,
    isbn: String,
    author: String,
    city: String,
  
    pages: String,
    publication: String,
    version: String,
    web: String, 
    price: String,
    active: Boolean,
    status: Boolean,
    idPlatform:Number,
    aplication: {
      type: Schema.Types.ObjectId,
      ref: "aplicationsBooks",
    },
    bookAgreement: {
      type: Schema.Types.ObjectId,
      ref: "Aggrement",
    },
    format: {
      type: Schema.Types.ObjectId,
      ref: "FormatBook",
    },
      providersBook: {
      type: Schema.Types.ObjectId,
      ref: "ProvidersBooks",
    },
    provider: {
      type: Schema.Types.ObjectId,
      ref: "ProvidersBooks",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = itemSchema;