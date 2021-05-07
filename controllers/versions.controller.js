const Items = require("../dao/versions");

exports.createItem = function (req, res, next) {
  var item = {};

  item.name = "Version";
  item.sigla = "(temp)";
  item.period = "";
  item.year = 0;
  item.group = "";
  item.startDate = new Date();
  item.endDate = new Date();
  item.active = true;
  item.program = req.body.id;

  item.priceTeacher = 0;
  item.priceDirector = 0;
  item.priceCoordinator = 0;
  item.priceTutorTfm = 0;


  Items.create(item, function (err, item) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Item created successfully",
    });
  });
};

exports.find = function (req, res, next) {
  Items.getByName(
    { name: { $regex: new RegExp("^" + req.body.q.toLowerCase(), "i") } },
    function (err, items) {
      if (err) {
        res.json({
          error: err,
        });
      }

      var formatedResults = [];
      items.forEach((element) => {
        var localResult = {
          value: element["_id"],
          label: element["name"],
          _id: element["_id"],
        };
        formatedResults.push(localResult);
      });
      res.json({
        items: formatedResults,
      });
    }
  );
};

exports.getProgramItem = function (req, res, next) {
  let query = { program: req.params.program, active: true };
  let queryParams = [];

  Items.paginate(query, {}, function (err, result) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json(result);
    }
  });
};

exports.getItems = function (req, res, next) {
  let query = { active: true };
  let queryParams = [];

  Items.paginate(query, {}, function (err, result) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json(result);
    }
  });
};

exports.getItem = function (req, res, next) {
  Items.get({ _id: req.params.id }, function (err, items) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      res.json({
        items: items,
      });
    }
  });
};

exports.updateItem = function (req, res, next) {
  let item = req.body;

  let id = item.id;

  if (item.id == 0) {
    delete item.id;
  }

  Items.update({ _id: id }, item, function (err, item) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Item updated successfully",
    });
  });
};

exports.removeItem = function (req, res, next) {
  Items.update({ _id: req.params.id }, { active: false }, function (err, item) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Item deleted successfully",
    });
  });
};
