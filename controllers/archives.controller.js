const sharp = require("sharp");
const path = require("path");
var mysql = require("mysql");

exports.mysql = async (req, res, next) => {
  var con = mysql.createConnection({
    host: "localhost",
    user: "uvirtual_admin",
    database: "uvirtual_academico",
      password: "Xeon1972Peer1",
    port: 3306
  });

  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
  });
};

exports.upload = async (req, res, next) => {
  const file = req.file;
  try {
    sharp(req.file.path)
      .resize(200, 200)
      .toFile(
        "public/uploads/" + "small-" + req.file.filename,
        (err, resizeImage) => {
          if (err) {
            console.log(err, "error ");
          } else {
            console.log(resizeImage, "se creo la cosa");
          }
        }
      );
  } catch (error) {
    console.error(error);
  }

  res.json({
    image: file.filename,
  });
};
