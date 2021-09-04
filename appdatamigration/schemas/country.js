const {Schema, model} = require("mongoose");

const CountrySchema = Schema({
    name: {
        type: String,
    },
    codeCountry: {
            type: String,
    },
    idPlatform: {
            type: Number,
    },
    status: {
        type: Boolean
    }       

},{
    timestamps: true
});

module.exports = model('Country',CountrySchema,'country');