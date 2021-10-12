var express = require('express');
const Item = require('../controllers/resources.controller');
var router = express.Router();
 
router.post('/get', Item.getItems);
router.post('/createResources', Item.createResources);

router.put('/update/:id', Item.updateItem);
router.post('/create', Item.createItem);

router.delete('/remove/:id', Item.removeItem);

module.exports = router;
