var mongoose = require('mongoose');
var itemSchema = require('../schemas/versionsPrograms');
const mongoosePaginate = require('mongoose-paginate-v2');

itemSchema.statics = {
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

    update: function(query, updateData, cb) {
        console.log(query, updateData);
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

var itemModel = mongoose.model('VersionsPrograms', itemSchema,'versionsPrograms');
module.exports = itemModel;