var express = require('express');
const Country = require('../controllers/country.controller');
var router = express.Router();
 
router.post('/create', Country.createItem);
router.post('/get', Country.getItems);
router.get('/getAll', Country.getItemsAll);

module.exports = router;
