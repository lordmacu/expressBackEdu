const {Schema, model} = require("mongoose");

const subjectPersonRatingsSchema = Schema({
    idProgram: {
        type: Schema.Types.ObjectId,
        ref: 'Program'
    },
    idSubject: {
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },
    idPerson: {
        type: Schema.Types.ObjectId,
        ref: 'Person'
    },
    rate: {
       type: Number
    }       

},{
    timestamps: true
});

module.exports = model('SubjectPersonRatings',subjectPersonRatingsSchema,'subjectPersonRatings');