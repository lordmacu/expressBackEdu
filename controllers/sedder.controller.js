const Statuses = require("../dao/statuses");
const Types = require("../dao/types");
const Aggrement = require("../dao/aggrement");

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


    Aggrement.create({ "name": "Brinks", "id": "3" }, function (err, item) { })
    Aggrement.create({ "name": "Educacion Continua", "id": "6" }, function (err, item) { })
    Aggrement.create({ "name": "Universidad Arturo Prat", "id": "5" }, function (err, item) { })
    Aggrement.create({ "name": "Universidad de Salamanca", "id": "4" }, function (err, item) { })
    Aggrement.create({ "name": "Universidad del Mar - UDM (Chile)", "id": "2" }, function (err, item) { })
    Aggrement.create({ "name": "Universidad Guglielmo Marconi", "id": "8" }, function (err, item) { })
    Aggrement.create({ "name": "Universidad Viña del Mar - UVM (Chile)", "id": "1" }, function (err, item) { })
    Aggrement.create({ "name": "UPSA", "id": "7" }, function (err, item) { })

};
