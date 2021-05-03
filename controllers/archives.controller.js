const sharp = require('sharp')
const path = require('path')


exports.upload = async (req, res, next) => {
    const file = req.file
    try {
        sharp(req.file.path).resize(200, 200).toFile('public/uploads/' + 'small-' + req.file.filename, (err, resizeImage) => {
            if (err) {
                console.log(err,"error ");
            } else {
                console.log(resizeImage,"se creo la cosa");
            }
        })
    } catch (error) {
        console.error(error);
    }
  
     res.json({
        image: file.filename
    })
}

 