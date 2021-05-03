var express = require('express');
const Item = require('../controllers/statuses.controller');
var router = express.Router();
 


router.post('/get', Item.getItems);

module.exports = router;
