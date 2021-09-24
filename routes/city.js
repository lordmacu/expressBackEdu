var express = require('express');
const City = require('../controllers/city.controller');
var router = express.Router();
 
router.post('/create', City.createItem);
router.post('/get', City.getItems);
router.get('/getAll', City.getItemsAll);

module.exports = router;
