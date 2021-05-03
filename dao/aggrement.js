var mongoose = require('mongoose');
var itemSchema = require('../schemas/aggrement');
const mongoosePaginate = require('mongoose-paginate-v2');

itemSchema.statics = {
    create : function(data, cb) {
        var item = new this(data);
        item.save(cb);
    },
    insertMany : function(data, cb) {
        var item = new this(data);
        item.insertMany(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    getByName: function(query, cb) {
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

itemSchema.plugin(mongoosePaginate);


var model = mongoose.model('Aggrement', itemSchema);
module.exports = model;