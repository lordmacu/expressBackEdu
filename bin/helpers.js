
var fs = require("fs");

exports.upload= function (file,path) {
  return new Promise(function (resolve, reject) {
    var dataFile = file;
    const type = dataFile.split(";")[0].split("/")[1];
    var name = Math.floor(Date.now() / 1000) + "." + type;
    const base64Data = file.replace(/^data:([A-Za-z-+/]+);base64,/, "");
    fs.writeFile("public/"+path+name, base64Data, "base64", (err) => {
      if (err) reject(err);
      else resolve(path+name);
    });
  });
}