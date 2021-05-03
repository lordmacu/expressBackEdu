var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personSchema = new Schema({
    name:String,
    sigla:String,
    period:String,
    year:String,
    group:String,
    program:{
        type:Schema.Types.ObjectId,
        ref:"Program"
    },
    year:Number,
    startDate:Date,
    endDate: Date,
    active:Boolean
 
}, {
    timestamps: true
});

module.exports = personSchema;