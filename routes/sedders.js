var express = require('express');
const Versions = require('../controllers/sedder.controller');
var router = express.Router();
 

router.post('/populatePlatform', Versions.populatePlatform);
module.exports = router;
