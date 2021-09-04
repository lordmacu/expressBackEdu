const {Schema, model} = require("mongoose");

const CitySchema = Schema({
    name: {
        type: String,
    },
    idCity: {
        type: Number,
    },
    codeCountry: {
            type: String,
    },
    country: {
        type: Schema.Types.ObjectId,
        ref: 'country',
        required: ['true','El pais no existe']
    },
    status:{
        type: Boolean
    }       

},{
    timestamps: true
});

module.exports = model('City',CitySchema,'city');