var mongoose = require("mongoose");
var Schema = mongoose.Schema;

function getResourceModel(fields, model) {
  var fields = fields.replace(/'/g, '"');
  var SchemaJson = JSON.parse(fields);

  var itemSchema = new Schema(SchemaJson, {
    timestamps: true
  });

  const newCollection =
    mongoose.models[model] || mongoose.model(model, itemSchema, model);
  return newCollection;
}

exports.createResources = function (req, res, next) {
  var collection = getResourceModel(
    '{"fields":"String","name":"String"}',
    "resources"
  );

  collection.create(
    { fields: req.body.fields, name: req.body.name },
    (err, docs) => {
      console.log(docs);
      res.json({
        message: "Item created successfully",
        data: docs
      });
    }
  );
};

exports.getResource = function (req, res, next) {
  var collection = getResourceModel(
    '{"fields":"String","name":"String"}',
    "resources"
  );


  collection.findOne({ name: req.body.model }, function (err, item) {
    if (err) {
      res.json({
        error: err
      });
    }
    res.json({
      message: "resourceListed",
      data: item
    });
  });
};

exports.getItem = function (req, res, next) {
  var collection = getResourceModel(
    '{"fields":"String","name":"String"}',
    "resources"
  );

  collection.findOne({ name: req.body.model }, function (err, item) {
    if (err) {
      res.json({
        error: err
      });
    }

    var collectionResource = getResourceModel(item.fields, item.name);
    req.body.where["status"] = true;
    collectionResource.findOne(req.body.where, function (err, itemResource) {
      res.json({
        message: "Items listed",
        data: itemResource
      });
    });
  });
};


exports.getItems = function (req, res, next) {
  var collection = getResourceModel(
    '{"fields":"String","name":"String"}',
    "resources"
  );

  collection.findOne({ name: req.body.model }, function (err, item) {
    if (err) {
      res.json({
        error: err
      });
    }

    var collectionResource = getResourceModel(item.fields, item.name);
    req.body.where["status"] = true;
    collectionResource.find(req.body.where, function (err, itemResource) {
      res.json({
        message: "Items listed",
        data: itemResource
      });
    });
  });
};

exports.createItem = function (req, res, next) {
  var collection = getResourceModel(
    '{"fields":"String","name":"String"}',
    "resources"
  );

  collection.findOne({ name: req.body.model }, function (err, item) {
    if (err) {
      res.json({
        error: err
      });
    }

    var collectionResource = getResourceModel(item.fields, item.name);

    collectionResource.create(req.body.create, function (err, itemResource) {
      res.json({
        message: "Items created",
        data: itemResource
      });
    });
  });
};

exports.updateItem = function (req, res, next) {
  let item = req.body;
  let id = item.id;

  var collection = getResourceModel(
    '{"fields":"String","name":"String"}',
    "resources"
  );

  collection.findOne({ name: req.body.model }, function (err, item) {
    if (err) {
      res.json({
        error: err
      });
    }

    
    var collectionResource = getResourceModel(item.fields, item.name);

    collectionResource.update({ _id: req.params.id }, req.body.update, function (err, itemResource) {
      res.json({
        message: "Items updated",
        data: itemResource
      });
    });
  });
};

exports.removeItem = function (req, res, next) {
  


  var collection = getResourceModel(
    '{"fields":"String","name":"String"}',
    "resources"
  );

  collection.findOne({ name: req.params.model }, function (err, item) {
    if (err) {
      res.json({
        error: err
      });
    }

    var collectionResource = getResourceModel(item.fields, item.name);

    collectionResource.update({ _id: req.params.id }, { status: false }, function (
      err,
      itemResource
    ) {
      res.json({
        message: "Item deleted successfully",
        data: itemResource
      });
    });
  });
};
