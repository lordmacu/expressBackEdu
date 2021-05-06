const Items = require("../dao/subjects");
const Helpers = require("../bin/helpers");
exports.createItem =  async function (req, res, next) {
  var item = req.body;
  if (item.id == 0) {
    delete req.body.id;
  }
    item.active = true;
    
    
  if (!!req.body.planAnalitico.file) {
    const planAnalitico = await Helpers.upload(
      req.body.planAnalitico.file,
      "planesAnaliticos/"
    );

    item.planAnalitico = planAnalitico;
  }

  Items.create(item, function (err, item) {
    if (err) {
      res.json({
        error: err,
      });
    }
    res.json({
      message: "Item created successfully",
      data: item,
    });
  });
};

exports.getItems = function (req, res, next) {
  let query = { active: true };
  let queryParams = [];

  if (!!req.body.q) {
    let columnSearch = req.body.columns;

    for (var c = 0; c < columnSearch.length; c++) {
      console.log(req.body.q);
      const queryData = {};
      var re = new RegExp(req.body.q, "i");

      queryData[columnSearch[c]] = { $regex: re };
      queryParams.push(queryData);
    }
    query = { $or: queryParams, active: true };
  }

  const sort = {};
  if (!!req.body.sort) {
    sort[req.body.sort] = req.body.sortDirection;
  } else {
    sort["_id"] = -1;
  }
  console.log(query);
  Items.paginate(
    query,
    {
      page: req.body.page,
      limit: req.body.perPage,
      sort: sort,
      populate: ["type", "status"],
    },
    function (err, result) {
      res.json(result);
    }
  );
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

exports.cloneItem = function (req, res, next) {
  Items.getSimple({ _id: req.body.id }, function (err, itemQuery) {
    if (err) {
      res.json({
        error: err,
      });
    } else {
      const {
        sigla,
        version,
        name,
        credits,
        hours,
        content,
        status,
        type,
        startDate,
        endDate,
        active,
        price,
      } = itemQuery;
      Items.create(
        {
          sigla,
          version,
          name,
          credits,
          hours,
          content,
          status,
          type,
          startDate,
          endDate,
          active,
          price,
        },
        function (err, item) {
          if (err) {
            res.json({
              error: err,
            });
          }

          Items.get({ _id: item.id }, function (err, items) {
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
        }
      );
    }
  });
};

exports.updateItem = async function (req, res, next) {
  let item = req.body;
  let id = item.id;

  if (item.id == 0) {
    delete item.id;
  }

  if (!!req.body.planAnalitico.file) {
    const planAnalitico = await Helpers.upload(
      req.body.planAnalitico.file,
      "planesAnaliticos/"
    );

    item.planAnalitico = planAnalitico;
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
