const {Schema, model, Types} = require("mongoose");

const PersonSchema = Schema({
    name:String,
    lastName:String,
    active:Boolean,
    birthday:Date,
    gender:String,
    dni:String,
    addressHome:String,
    addressOffice:String,
    state:String,
    province:String,
    zipCode:String,
    country:{
        type:Schema.Types.ObjectId,
        ref:"Country",
        required: [true,'Country es obligatorio']
    },
    city:{
        type:Schema.Types.ObjectId,
        ref:"City",
        required: [true,'City es obligatorio']
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
    commentary: String,
    status: Boolean,
        idPlatform:Number     

},{
    timestamps: true
});

module.exports = model('Person',PersonSchema,'person');