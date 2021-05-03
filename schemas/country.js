var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var countrySchema = new Schema({
    name:'String',
    code:'String'
}, {
    timestamps: true
});
 
module.exports = countrySchema;