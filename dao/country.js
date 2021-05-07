var mongoose = require('mongoose');
var countrySchema = require('../schemas/country');
const mongoosePaginate = require('mongoose-paginate-v2');

countrySchema.statics = {
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
     deleteAll: function(query, cb) {
         this.deleteMany({},cb);
    },
    paginate: function(query, cb) {
        
     }
}

countrySchema.plugin(mongoosePaginate);


var countryModel = mongoose.model('Country', countrySchema);
module.exports = countryModel;