var express = require('express');
const multer = require('multer');

const Archives = require('../controllers/archives.controller');
var router = express.Router();
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+"_"+file.originalname)
    }
  })

var upload = multer({ storage: storage })

router.post('/upload', upload.single('files'), Archives.upload);
router.post('/testMysql', Archives.mysql);
 
module.exports = router;
