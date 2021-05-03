var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var itemSchema = new Schema({
    name:'String',
    id:'String'
 }, {
    timestamps: true
});
 
module.exports = itemSchema;