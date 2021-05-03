var express = require('express');
const People = require('../controllers/people.controller');
var router = express.Router();
 
router.post('/create', People.createItem);
router.post('/get', People.getItems);
router.post('/find', People.find);
router.get('/get/:id', People.getItem);
router.put('/update/:id', People.updateItem);
router.delete('/remove/:id', People.removeItem);

module.exports = router;
