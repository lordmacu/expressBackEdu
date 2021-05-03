const Items = require('../dao/country');

exports.createItem = function (req, res, next) {
      
    /*Items.create(item, function(err, item) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Item countries successfully"
        })
    })*/
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
            var localResult={"value":element["code"],"label":element["name"],"_id":element["_id"]};
            formatedResults.push(localResult);
        });
        res.json({
            items: formatedResults
        })
    })
}

exports.getItem = function(req, res, next) {
    Items.get({_id: req.params.id}, function(err, items) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            items: items
        })
    })
}

exports.updateItem = function(req, res, next) {
    const item = {
        name: req.body.name,
        description: req.body.description
    }
    Items.update({_id: req.params.id}, item, function(err, item) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Item updated successfully"
        })
    })
}

exports.removeItem = function(req, res, next) {
    Items.delete({_id: req.params.id}, function(err, item) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Item deleted successfully"
        })
    })
}