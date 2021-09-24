var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    idCity: Number,
    name: String,
    codeCountry: String,
    country: {
        type:Schema.Types.ObjectId,
        ref:"Country"
    },
    status: Boolean,
        idPlatform:Number

}, {
    timestamps: true
});
 
module.exports = itemSchema;