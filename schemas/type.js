var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personSchema = new Schema({
    name:String,
    value: String,
        idPlatform:Number

    
 
}, {
    timestamps: true
});

module.exports = personSchema;