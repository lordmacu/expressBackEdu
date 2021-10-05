var mongoose = require('mongoose');
var itemSchema = require('../schemas/bookAgreement');
const mongoosePaginate = require('mongoose-paginate-v2');

itemSchema.statics = {
    create : function(data, cb) {
        var item = new this(data);
        item.save(cb);
    },

    get: function(query, cb) {
        this.findOne(query, cb)
    },

     getSimple: function(query, cb) {
         this.findOne(query, cb);
    },
      getAll: function(query, cb) {
         this.find(query, cb);
    },


    getByName: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true}, cb);
    },
     deleteAll: function(query, cb) {
         this.deleteMany({},cb);
    },

    delete: function(query, cb) {
        this.findOneAndDelete(query,cb);
    }
}
itemSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('AggrementOld', itemSchema);
 