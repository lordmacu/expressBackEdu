const {Schema, model} = require("mongoose");

const RatingsSchema = Schema({
  
    program: {
        type: Schema.Types.ObjectId,
        ref: 'program'
    },
    subject: {
        type: Schema.Types.ObjectId,
        ref: 'subject'
    },
    person: {
        type: Schema.Types.ObjectId,
        ref: 'person'
    },
    grade: {
        type: Number,
    },
    idPlatform:{
        type: Number
    },  
    status:{
        type: Boolean
    }       

},{
    timestamps: true
});

module.exports = model('Ratings',RatingsSchema,'ratings');