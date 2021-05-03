const Statuses = require("../dao/statuses");
const Types = require("../dao/types");

exports.populatePlatform = function (req, res, next) {
  Types.create({ name: "Regular", value: "Regular" }, function (err, item) {});
  Types.create({ name: "Tutoría", value: "Tutoria" }, function (err, item) {});
  Statuses.create({ name: "Antiguo", value: "Antiguo" }, function (
    err,
    item
  ) {});
  Statuses.create({ name: "Nuevo", value: "Nuevo" }, function (err, item) {});

  res.json({
    message: "Item created successfully",
  });
};
