var express = require('express');
const Item = require('../controllers/types.controller');
var router = express.Router();
 


router.post('/get', Item.getItems);

module.exports = router;
