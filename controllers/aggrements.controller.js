 
const Items = require('../dao/aggrement');


exports.createItem = function (req, res, next) {

    Items.create({ "name": "Brinks", "id": "3" }, function (err, item) { })
    Items.create({ "name": "Educacion Continua", "id": "6" }, function (err, item) { })
    Items.create({ "name": "Universidad Arturo Prat", "id": "5" }, function (err, item) { })
    Items.create({ "name": "Universidad de Salamanca", "id": "4" }, function (err, item) { })
    Items.create({ "name": "Universidad del Mar - UDM (Chile)", "id": "2" }, function (err, item) { })
    Items.create({ "name": "Universidad Guglielmo Marconi", "id": "8" }, function (err, item) { })
    Items.create({ "name": "Universidad Viña del Mar - UVM (Chile)", "id": "1" }, function (err, item) { })
    Items.create({ "name": "UPSA", "id": "7" }, function (err, item) { })
}

 
 

exports.getItems = function(req, res, next) {
  
    Items.get({"name":
    { $regex: new RegExp("^" + req.body.q.toLowerCase(), "i") } }, function(err, items) {
        if(err) {
            res.json({
                error: err
            })
        }

        var formatedResults=[];
        items.forEach(element => {
            var localResult={"value":element["id"],"label":element["name"],"_id":element["_id"]};
            formatedResults.push(localResult);
        });
        res.json({
            items: formatedResults
        })
    })
}