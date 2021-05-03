var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var personSchema = new Schema({
    name:String,
    lastName:String,
    active:Boolean,
    birthday:Date,
    gender:String,
    dni:String,
    addressHome:String,
    addressOffice:String,
    city:String,
    state:String,
    zipCode:String,
    country:{
        type:Schema.Types.ObjectId,
        ref:"Country"
    },
    principalEmail:String,
    secundaryEmail:String,
    phone:String,
    mobile:String,
    title:String,
    university:String,
    image:String,
    curriculum:String,
    password:String,
    commentary:String 
 
}, {
    timestamps: true
});

module.exports = personSchema;