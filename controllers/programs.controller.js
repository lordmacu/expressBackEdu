const Items = require('../dao/programs');
const Helpers = require("../bin/helpers");

exports.createItem =  async function (req, res, next) {
    var item=req.body;
    if(item.id==0){
        delete req.body.id;
    }
    item.active = true;
     if (!!req.body.reglamento.file) {
    const reglamento = await Helpers.upload(
      req.body.reglamento.file,
      "reglamentos/"
    );

    item.reglamento = reglamento;
    }
    
    if (!!req.body.brochure.file) {
    const brochure = await Helpers.upload(
      req.body.brochure.file,
      "brochures/"
    );

    item.brochure = brochure;
  }
    
 
    Items.create( item, function(err, item) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message: "Item created successfully",
            data:item
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
    
     Items.paginate(query, { page: req.body.page, limit: req.body.perPage,sort:sort,  populate: ['coordinatorAcad','directorAcad','agreement','subjects'],}, function (err, result) {
         res.json(result)
     })
}
 
exports.addSubject = function (req, res, next) {
  Items.addSubject(req.body, function (err, itemQuery) {
    res.json({
      message: "Item updated successfully",
    });
  });
};



exports.deleteSubject = function (req, res, next) {
  Items.deleteSubject(req.body, function (err, itemQuery) {
    res.json({
      message: "Item updated successfully",
    });
  });
};


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

exports.cloneItem = function(req, res, next) {
    Items.getSimple({_id: req.body.id}, function(err, itemQuery) {
        if(err) {
            res.json({
                error: err
            })
        }else{
            
            const { active, agreement, coordinatorAcad, description, directorAcad, endDate, name, period, price, sigla, startDate, studentProfile, title, year } = itemQuery;

            Items.create({active, agreement, coordinatorAcad, description, directorAcad, endDate, name, period, price, sigla, startDate, studentProfile, title, year}, function(err, item) {
                    if(err) {
                        res.json({
                            error : err
                        })
                    }
                    
                 Items.get({_id: item.id}, function(err, items) {
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
                
                
                })
        }
        
    })
}
exports.updateItem = async function(req, res, next) {

    let item=req.body;
    let id=item.id;
    
    if(item.id==0){
        delete item.id;
    }

    if (!!req.body.reglamento.file) {
    const reglamento = await Helpers.upload(
      req.body.reglamento.file,
      "reglamentos/"
    );

    item.reglamento = reglamento;
    }
    
    if (!!req.body.brochure.file) {
    const brochure = await Helpers.upload(
      req.body.brochure.file,
      "brochures/"
    );

    item.brochure = brochure;
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