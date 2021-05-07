const Statuses = require("../dao/statuses");
const Types = require("../dao/types");
const Aggrement = require("../dao/aggrement");
const Tutor = require("../dao/tutor");
const Country = require('../dao/country');

exports.populatePlatform = function (req, res, next) {

  Country.deleteAll({}, function (err, item) {});

  Country.create({ name: "Argentina",code:"ARG" }, function (err, item) { });
  Country.create({ name: "Colombia",code:"CO" }, function (err, item) { });
  Country.create({ name: "Uruguay",code:"UR" }, function (err, item) { });
  Country.create({ name: "Bolivia",code:"BO" }, function (err, item) { });


  Tutor.deleteAll({}, function (err, item) {});

  Tutor.create({ name: "Profesor 1" }, function (err, item) { });
  Tutor.create({ name: "Profesor 2"}, function (err, item) {});
  Tutor.create({ name: "Profesor 3"}, function (err, item) {});
  Tutor.create({ name: "Profesor 4"}, function (err, item) {});


  Types.deleteAll({}, function (err, item) {});
  Types.create({ name: "Regular", value: "Regular" }, function (err, item) {});
  Types.create({ name: "Tutoría", value: "Tutoria" }, function (err, item) {});

  
  Statuses.deleteAll({}, function (err, item) {});

  Statuses.create({ name: "Antiguo", value: "Antiguo" }, function (
    err,
    item
  ) {});
  Statuses.create({ name: "Nuevo", value: "Nuevo" }, function (err, item) {});
  Statuses.deleteAll({}, function (err, item) {});

  Aggrement.create({ name: "Brinks", id: "3" }, function (err, item) {});
  Aggrement.create({ name: "Educacion Continua", id: "6" }, function (
    err,
    item
  ) {});
  Aggrement.create({ name: "Universidad Arturo Prat", id: "5" }, function (
    err,
    item
  ) {});
  Aggrement.create({ name: "Universidad de Salamanca", id: "4" }, function (
    err,
    item
  ) {});
  Aggrement.create(
    { name: "Universidad del Mar - UDM (Chile)", id: "2" },
    function (err, item) {}
  );
  Aggrement.create(
    { name: "Universidad Guglielmo Marconi", id: "8" },
    function (err, item) {}
  );
  Aggrement.create(
    { name: "Universidad Viña del Mar - UVM (Chile)", id: "1" },
    function (err, item) {}
  );
  Aggrement.create({ name: "UPSA", id: "7" }, function (err, item) {});
  res.json({
    message: "Item created successfully",
  });
};
