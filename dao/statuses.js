var mongoose = require('mongoose');
var itemSchema = require('../schemas/status');
const mongoosePaginate = require('mongoose-paginate-v2');

itemSchema.statics = {
    create : function(data, cb) { 
        var item = new this(data);
        item.save(cb);
    },

    get: function(query, cb) {
        this.findOne(query, cb);
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
    deleteAll: function(query, cb) {
         this.deleteMany({},cb);
    },
    paginate: function(query, cb) {
        
     }
}
itemSchema.plugin(mongoosePaginate);

 module.exports = mongoose.model('statusSubjects', itemSchema,'statusSubjects');

 