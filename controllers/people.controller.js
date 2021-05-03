const Items = require('../dao/people');

exports.createItem = function (req, res, next) {
       
    var item=req.body;
    if(item.id==0){
        delete req.body.id;
    }
    item.active=true;

    Items.create(item, function(err, item) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Item created successfully"
        })
    })
}

exports.find = function(req, res, next) {
  
    Items.getByName({"name":
    { $regex: new RegExp("^" + req.body.q.toLowerCase(), "i") } }, function(err, items) {
        if(err) {
            res.json({
                error: err
            })
        }

        var formatedResults=[];
        items.forEach(element => {
            var localResult={"value":element["_id"],"label":element["name"],"_id":element["_id"]};
            formatedResults.push(localResult);
        });
        res.json({
            items: formatedResults
        })
    })
}

exports.getItems = function(req, res, next) {

   let query={active:true};
   let queryParams=[];

   if(!!req.body.q){
        let columnSearch=req.body.columns;

        for(var c=0; c<columnSearch.length;c++){
            const queryData = {};
            queryData[columnSearch[c]]={ $regex: new RegExp(req.body.q), $options: "i" } ;
            queryParams.push(queryData);
        }
        query={"$or": queryParams,active:true};
   }

   const sort={};
   if(!!req.body.sort){
    sort[req.body.sort]=req.body.sortDirection ;
   }else{
       sort["_id"]=-1
   }
   
    Items.paginate(query, { page: req.body.page, limit: req.body.perPage,sort:sort,  populate: 'country',}, function (err, result) {
        res.json(result)
    })
}

exports.getItem = function(req, res, next) {
    Items.get({_id: req.params.id}, function(err, items) {
        if(err) {
            res.json({
                error: err
            })
        }else{
            res.json({
                items: items
            })
        }
        
    })
}

exports.updateItem = function(req, res, next) {

    let item=req.body;
    let id=item.id;
    
    if(item.id==0){
        delete item.id;
    }
   
    Items.update({_id: id}, item, function(err, item) {
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

    Items.update({_id: req.params.id}, {active:false}, function(err, item) {
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