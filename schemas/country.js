var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    name:'String',
    codeCountry: 'String',
    status: Boolean,
        idPlatform:Number

}, {
    timestamps: true
});
 
module.exports = itemSchema;