const Items = require("../dao/types");

 
exports.getItems = function (req, res, next) {
  let query = {  };
  let queryParams = [];

  Items.paginate(query, {}, function (err, result) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
         var formatedResults=[];
        result.docs.forEach(element => {
            var localResult={"value":element["value"],"label":element["name"],"_id":element["_id"]};
            formatedResults.push(localResult);
        });
        res.json({
            items: formatedResults
        })
    }
  });
};
 