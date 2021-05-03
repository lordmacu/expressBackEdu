var express = require('express');
const Program = require('../controllers/programs.controller');
var router = express.Router();
 
router.post('/create', Program.createItem);
router.post('/get', Program.getItems);
router.post('/clone', Program.cloneItem);
router.get('/get/:id', Program.getItem);
router.put('/update/:id', Program.updateItem);
router.delete('/remove/:id', Program.removeItem);

module.exports = router;
