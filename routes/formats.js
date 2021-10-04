var express = require('express');
const Item = require('../controllers/formats.controller');
var router = express.Router();
 
router.post('/create', Item.createItem);
router.post('/get', Item.getItems);
router.post('/getAll', Item.getAllItems);
 router.get('/get/:id', Item.getItem);
  
module.exports = router;
