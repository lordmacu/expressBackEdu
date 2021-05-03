var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personSchema = new Schema({
    name:String,
    value:String,
    
 
}, {
    timestamps: true
});

module.exports = personSchema;