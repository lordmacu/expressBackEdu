var express = require('express');
const Versions = require('../controllers/versions.controller');
var router = express.Router();
 

router.post('/program/:program', Versions.getProgramItem);
router.post('/program/:program/:version', Versions.getProgramItem);
router.post('/create', Versions.createItem);
router.post('/get', Versions.getItems);
router.delete('/remove/:id', Versions.removeItem);
router.put('/update/:id', Versions.updateItem);

module.exports = router;
