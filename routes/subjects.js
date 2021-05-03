var express = require('express');
const Item = require('../controllers/subjects.controller');
var router = express.Router();
 
router.post('/create', Item.createItem);
router.post('/get', Item.getItems);
router.post('/clone', Item.cloneItem);
router.get('/get/:id', Item.getItem);
router.put('/update/:id', Item.updateItem);
router.delete('/remove/:id', Item.removeItem);

module.exports = router;
