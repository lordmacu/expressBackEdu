 
const Items = require('../dao/aggrement');


exports.createItem = function (req, res, next) {

    Items.create({ "name": "UPSA", "id": "7" }, function (err, item) {
            if(err) {
                res.json({
                    error : err
                })
            }
            res.json({
                message : "Item countries successfully"
            })
        })

     
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