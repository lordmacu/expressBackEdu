var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var countrySchema = new Schema({
    name:'String',
    code: 'String',
        idPlatform:Number

}, {
    timestamps: true
});
 
module.exports = countrySchema;