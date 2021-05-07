var express = require('express');
const Item = require('../controllers/subjects.controller');
var router = express.Router();
 
router.post('/create', Item.createItem);
router.post('/get', Item.getItems);
router.post('/clone', Item.cloneItem);
router.get('/get/:id', Item.getItem);
router.put('/update/:id', Item.updateItem);
router.delete('/remove/:id', Item.removeItem);

router.post('/deleteStudent', Item.deleteStudent);

router.post('/addStudent', Item.addStudent);

router.post('/addTutor', Item.addTutor);
router.post('/deleteTutor', Item.deleteTutor);
router.post('/setPrincpalTeacher', Item.setPrincpalTeacher);
router.post('/find', Item.find);

module.exports = router;
