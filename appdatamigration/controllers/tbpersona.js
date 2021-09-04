const { response } = require("express");
const tbpersona = require("../schemas/tbpersona");
const { Op } = require('sequelize');


const getTBpersonasAll = async(req,res = response)=>{

    // const {mail, password} = req.params;

    try {

        const people = await Promise.all([
            //tbpersona.findAndCountAll(),
            tbpersona.findAll()
        ]);  
       
        //Verificar si el email existe
        if(!people ){
            return res.status(400).json({
                msg: 'Error al obtener la tabla persona'
            });
        }
        res.json({
           // total,
            people
         
         });   
    } catch (error) {
        console.log(`${__dirname} ${error}`);
        console.log(error);
        return  res.status(500).json({
            "msg": "Contacte con el administrador"
         });  
    }
         
}

const getTBpersonasPaises = async(req,res = response)=>{

    // const {mail, password} = req.params;

    try {

        const people = await Promise.all([
            //tbpersona.findAndCountAll(),
            tbpersona.findAll({
                attributes: [
                    'pais'
                ],
                where: {
                    pais:{
                        [Op.ne]: null 
                    }
                },
                group: 'pais'
            })
        ]);  
       
        //Verificar si el email existe
        if(!people ){
            return res.status(400).json({
                msg: 'Error al obtener la tabla persona'
            });
        }

        // const nuevo = people.map( p => (
        //     {
        //         pais: p
        //     }
        // ));

     
        res.json({
           // total,
           people
         
         });   
    } catch (error) {
        console.log(`${__dirname} ${error}`);
        console.log(error);
        return  res.status(500).json({
            "msg": "Contacte con el administrador"
         });  
    }
         
}

function utf8_encode (argString) { // eslint-disable-line camelcase
    //  discuss at: https://locutus.io/php/utf8_encode/
    // original by: Webtoolkit.info (https://www.webtoolkit.info/)
    // improved by: Kevin van Zonneveld (https://kvz.io)
    // improved by: sowberry
    // improved by: Jack
    // improved by: Yves Sucaet
    // improved by: kirilloid
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    // bugfixed by: Onno Marsman (https://twitter.com/onnomarsman)
    // bugfixed by: Ulrich
    // bugfixed by: Rafał Kukawski (https://blog.kukawski.pl)
    // bugfixed by: kirilloid
    //   example 1: utf8_encode('Kevin van Zonneveld')
    //   returns 1: 'Kevin van Zonneveld'
    if (argString === null || typeof argString === 'undefined') {
      return ''
    }
    // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    const string = (argString + '')
    let utftext = ''
    let start
    let end
    let stringl = 0
    start = end = 0
    stringl = string.length
    for (let n = 0; n < stringl; n++) {
      let c1 = string.charCodeAt(n)
      let enc = null
      if (c1 < 128) {
        end++
      } else if (c1 > 127 && c1 < 2048) {
        enc = String.fromCharCode(
          (c1 >> 6) | 192, (c1 & 63) | 128
        )
      } else if ((c1 & 0xF800) !== 0xD800) {
        enc = String.fromCharCode(
          (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
        )
      } else {
        // surrogate pairs
        if ((c1 & 0xFC00) !== 0xD800) {
          throw new RangeError('Unmatched trail surrogate at ' + n)
        }
        const c2 = string.charCodeAt(++n)
        if ((c2 & 0xFC00) !== 0xDC00) {
          throw new RangeError('Unmatched lead surrogate at ' + (n - 1))
        }
        c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000
        enc = String.fromCharCode(
          (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
        )
      }
      if (enc !== null) {
        if (end > start) {
          utftext += string.slice(start, end)
        }
        utftext += enc
        start = end = n + 1
      }
    }
    if (end > start) {
      utftext += string.slice(start, stringl)
    }
    return utftext
  }

module.exports = {
    getTBpersonasAll,
    getTBpersonasPaises
}