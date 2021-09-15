var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
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
    priceTeacher:Number,
    priceDirector:Number,
    priceCoordinator:Number,
    priceTutorTfm:Number,
    startDate:Date,
    endDate: Date,
    active: Boolean,
        idPlatform:Number

 
}, {
    timestamps: true
});

module.exports = itemSchema;