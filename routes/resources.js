var express = require('express');
const Item = require('../controllers/resources.controller');
var router = express.Router();
 
router.post('/get', Item.getItem);
router.post('/getAll', Item.getItems);
router.post('/createResources', Item.createResources);
router.post('/getResource', Item.getResource);

router.put('/update/:id', Item.updateItem);
router.post('/create', Item.createItem);

router.delete('/remove/:id/:model', Item.removeItem);

module.exports = router;
