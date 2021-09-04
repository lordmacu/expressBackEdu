

const { leerInput, inquirerMenu, pausa } = require('./helpers/inquirer');
const {uptadeCapitaliceTBpersona, depurarTBPersona, guardarPaisesEnTBPersona, depurarCiudadesEnTBPersona, buscarActualizarCiudadesTBPersona, listarPerson} = require('./models/tbPersona');
const  {dbMongo}  = require('./db/conection');
const {  migrarPaisesCountry } = require('./models/country');
const {  migrarPersonaPerson } = require('./models/person');
const { listarPaisesDepurados } = require('./models/pais');
const { migrarCiudadesCity } = require('./models/city');
const { depurarTBMateriaName } = require('./models/tbMaterias');
const { migrarTypeSubject } = require('./models/typeSubject');
const { migrarStatusSubject } = require('./models/statusSubject');
const {  migrarAggrement } = require('./models/aggrement');
const {  migrarTBMateriasSubject, popularEstuduantesSubject, popularTutoresSubject } = require('./models/subject');
const { migrarTBNotificacionEsquema } = require('./models/tbnotificacionesquema');
const { migrarProgram, popularSubjectProgram } = require('./models/program');
const { setRatings } = require('./models/ratings');
const { depurarTBProgramasName } = require('./models/tbProgramas');

require('dotenv').config();

const conectionMongo = async (log)=>{
    await dbMongo(log);
}

const main = async() => {
   
    //conection();
    conectionMongo(false);
    

    let opt;

    do{

        opt = await inquirerMenu();
        
        switch( opt ) {

            case 1:
                const op1 = await leerInput('Introduce (Y/y) para continuar: ');
                
                if (op1 === 'Y' || op1 === 'y') {
                console.clear();
                
                await uptadeCapitaliceTBpersona();
                
                }else{
                    
                    continue;
                }
            break;
               
        case 2:
        const op2 = await leerInput('Introduce (Y/y) para continuar: ');
        
        if (op2 === 'Y' || op2 === 'y') {
                console.clear();
                depurarTBPersona(); 
        }else{
            
            continue;
        }
        
            break;
        case 3: 
            const op3 = await leerInput('Introduce (Y/y) para continuar: ');

            if (op3 === 'Y' || op3 === 'y') {
                console.clear();
                listarPaisesDepurados();
             
            }else{
                continue;
            }
                
                break;
            case 4: 
            const op4 = await leerInput('Introduce (Y/y) para continuar: ');

            if (op4 === 'Y' || op4 === 'y') {
                console.clear();
                migrarPaisesCountry();

            }else{
                continue;
            }
                
            break;
            case 5: 
            const op5 = await leerInput('Introduce (Y/y) para continuar: ');

            if (op5 === 'Y' || op5 === 'y') {
                console.clear();
                migrarCiudadesCity();
           
                
            }else{
                continue;
            }
                
            break;
            case 6:
                const op6 = await leerInput('Introduce (Y/y) para continuar: ');
                if (op6 === 'Y' || op6 === 'y') {

                    console.clear();
                    guardarPaisesEnTBPersona();
                   

                }else{
                    continue;
                }
                break;
            case 7:
                const op7 = await leerInput('Introduce (Y/y) para continuar: ');
                if (op7 === 'Y' || op7 === 'y') {

                    console.clear();
                    depurarCiudadesEnTBPersona();
                    
                
                }else{
                    continue;
                }
                break;
            case 8:
                    const op8 = await leerInput('Introduce (Y/y) para continuar: ');
                    
                    if (op8 === 'Y' || op8 === 'y') {
                        console.clear();
                       
                       buscarActualizarCiudadesTBPersona();
                 
                    }else{
                        continue;
                    }
                    
             break;
             case 9:
                    const op9 = await leerInput('Introduce (Y/y) para continuar: ');
                    
                    if (op9 === 'Y' || op9 === 'y') {
                        console.clear();
                        migrarPersonaPerson();
                        

                    }else{
                        continue;
                    }
                    
             break;
            case 10:
                const op10 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op10 === 'Y' || op10 === 'y') {
                    console.clear();
                    listarPerson();

                }else{
                    continue;
                }
                    
                break;
                
            case 11:
                const op11 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op11 === 'Y' || op11 === 'y') {
                    console.clear();
                    console.log('NO APLICABLE');
    
                    // const data = await getTBpersonasPaisesAll();
                    
                    // const personas = JSON.parse(data);
    
                    // personas.map(async(pais) => {
                    //     const res = await setCountry(pais.pais.trim());
                    //     console.log("Inserta:",res.name); 
                    // });
                }else{
                    continue;
                }
                    
            break;
            case 12:
                const op12 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op12 === 'Y' || op12 === 'y') {
                    console.clear();
                    
                    migrarTypeSubject();

                    migrarStatusSubject();

                    migrarAggrement();

                }else{
                    continue;
                }
                    
            break;

            case 13:
                const op13 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op13 === 'Y' || op13 === 'y') {
                    console.clear();
                   console.log('SIN USO');
                    // console.log('Obteniendo y migrando tbconvenio-aggrement');
              
                    // const dataConvenio = await getTBconvenioAll();
                    
                    // const convenios = JSON.parse(dataConvenio);
    
                    // convenios.map(async(convenio) => {
                    //     const aggrement = {
                    //         name: convenio.convenio,
                    //         shortname: convenio.nombreCorto,
                    //         status: convenio.estado,
                    //         idPlatform: convenio.id
                    //     };
                    //    const resAggrement = await setAggrement(aggrement);
                    //     console.log(":",resAggrement.name); 
                    // });
                }else{
                    continue;
                }
                    
            break;
            case 14:
                const op14 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op14 === 'Y' || op14 === 'y') {
                    console.clear();
                    
                    depurarTBMateriaName();
              
                    }else{
                        
                        continue;
                    }
                    

            break;
            case 15:
                const op15 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op15 === 'Y' || op15 === 'y') {
                    console.clear();
                    migrarTBMateriasSubject();
 
                   
                }else{
                    continue;
                }
                    
            break;
            case 16:
                const op16 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op16 === 'Y' || op16 === 'y') {
                    console.clear();

                    popularEstuduantesSubject();
                  
                }else{
                    continue;
                }
                

               

            break;
            case 17:
                const op17 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op17 === 'Y' || op17 === 'y') {
                    console.clear();
                    popularTutoresSubject();
                   
                }else{
                    continue;
                }
               

            break;
            case 18:
                const op18 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op18 === 'Y' || op18 === 'y') {
                    console.clear();
                    await migrarTBNotificacionEsquema();
 
                }else{
                    continue;
                }

               

            break;
            case 19:
                const op19 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op19 === 'Y' || op19 === 'y') {
                    console.clear();

                    depurarTBProgramasName();
                    
                }else{
                    continue;
                }


            break;
            case 20:
                const op20 = await leerInput('Introduce (Y/y) para continuar: ');

                if (op20 === 'Y' || op20 === 'y') {
                    console.clear();
                    migrarProgram();
                    
                }else{
                    continue;
                }
                
                
                
                break;
                case 21:
                    const op21 = await leerInput('Introduce (Y/y) para continuar: ');
                    
                    if (op21 === 'Y' || op21 === 'y') {
                        console.clear();
                        
                        popularSubjectProgram();
                    
                }else{
                    continue;
                }


            break;
            case 22:
                const op22 = await leerInput('Introduce (Y/y) para continuar: ');
                    
                if (op22 === 'Y' || op22 === 'y') {
                    console.clear();
                    
                await setRatings();
                
            }else{
                continue;
            }

            break;
            case 23:
                console.clear();

            break;

        }



        if ( opt !== 0 ) await pausa();

    } while ( opt !== 0 )



}



main();