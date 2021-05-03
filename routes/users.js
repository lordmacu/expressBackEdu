var express = require('express');
const Person = require('../models/person');
const Program = require('../models/program');
var router = express.Router();
 /* GET users listing. */
router.get('/', async (req, res, next) =>{


    const person= new Person({"name":"Cristian"});
  await person.save(); 

  console.log(person._id);
 
  const program= new Program({"initials":"Cristian"});
  program.coordinatorAcad=person._id;
  await program.save(); 

  const personShow = await Program
  .findById(program._id)
  .populate('coordinatorAcad');


  res.send(personShow);

 
});

module.exports = router;
