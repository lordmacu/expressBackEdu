const Proveedor = require('../../schemas/relational/tbproveedores');
const Country = require("../../dao/country");
const City = require("../../dao/cities");

const setProveedores = async(data) =>{
    const country =await Country.findById(data.country)
    const city = await City.findById(data.city)

    const proveedor = await Proveedor.create({
        empresa: data.name,
        personacontacto: data.contactForm,
        direccion: data.address,
        telefono: data.phone,
        email: data.email,
        website: data.web,
        pais: country.name,
        ciudad: city.name
      });
      console.log("Insert: ", proveedor);
      return proveedor;
}

const updateProveedores = async(data) =>{
    const country =await Country.findById(data.country)
    const city = await City.findById(data.city)
    
    const proveedor = await Proveedor.update({
        empresa: data.name,
        personacontacto: data.contactForm,
        direccion: data.address,
        telefono: data.phone,
        email: data.email,
        website: data.web,
        pais: country.name,
        ciudad: city.name
      }, 
        {
            where: {id: data.idPlatform}
        });
      console.log("Update: ", proveedor);
      return proveedor;
}

const deleteProveedor = async (id) => { 
  const proveedor = await Proveedor.destroy({
    where: {
      id
    }
  });
  console.log("Delete:", proveedor);
  return proveedor;
};




module.exports = {
    setProveedores,
    updateProveedores,
    deleteProveedor
}