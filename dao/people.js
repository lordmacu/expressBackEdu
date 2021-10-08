var mongoose = require('mongoose');
var personSchema = require('../schemas/person');
const mongoosePaginate = require('mongoose-paginate-v2');

personSchema.statics = {
    create : function(data, cb) {
        var item = new this(data);
        item.save(cb);
    },

    get: function(query, cb) {
        this.findOne(query, cb).populate('country');
    },

    getByName: function(query, cb) {
        this.find(query, cb);
    },

    getStudents: function(query, cb) {
        this.find(query, cb);
    },

    getTutors: function(query, cb) {
        this.find(query, cb);
    },

    getCoordinadores: function(query, cb) {
        this.find(query, cb);
    },
    getDirectores: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    },
    count: function(query, cb) {
       return  this.countDocuments({});
    },
    paginate: function(query, cb) {
        
     }
}
personSchema.plugin(mongoosePaginate);

var personModel = mongoose.model('Person', personSchema);
module.exports = personModel;