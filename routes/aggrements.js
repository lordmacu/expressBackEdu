var express = require('express');
const multer = require('multer');
var router = express.Router();

const Aggrements = require('../controllers/aggrements.controller');
 
router.post('/create', Aggrements.createItem);
router.post('/get', Aggrements.getItems);
module.exports = router;
