const inquirer = require('inquirer');
require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `${ '1.'.green } Ajustar tabla tbpersona`
            },
            {
                value: 2,
                name: `${ '2.'.green } Depurar Paises tbpersona`
            },
            {
                value: 3,
                name: `${ '3.'.green } Listar paises depurados`
            } ,
            {
                value: 4,
                name: `${ '4.'.green } Migrar paises Country-Mongo`
            },
            {
                value: 5,
                name: `${ '5.'.green } Migrar ciudades City-Mongo`
            },
            {
                value: 6,
                name: `${ '6.'.green } Depura y Guarda paises en la tabla tbpersona`
            },{
                value: 7,
                name: `${ '7.'.green } Depurar Ciudades tbpersona`
            },{
                value: 8,
                name: `${ '8.'.green } Buscar y actualizar ciudades en la tabla tbpersona`
            },{
                value: 9,
                name: `${ '9.'.green } Migrar Table Persona`
            },{
                value: 10,
                name: `${ '10.'.green } Listado documentos person`
            },{
                value: 11,
                name: `${ '11.'.green } NO USAR Migrar tabla ciudad (country-mongo)`
            },{
                value: 12,
                name: `${ '12.'.green } Migrar type-status-aggrement`
            },{
                value: 13,
                name: `${ '13.'.green } Popular Aggrenebt-Program`
            },{
                value: 14,
                name: `${ '14.'.green } Depurar tbmaterias Nombre`
            },{
                value: 15,
                name: `${ '15.'.green } Migrar tbmaterias-subject`
            },{
                value: 16,
                name: `${ '16.'.green } Popular estudiantes en subject`
            },{
                value: 17,
                name: `${ '17.'.green } Popular tutores en subjects`
            },{
                value: 18,
                name: `${ '18.'.green } Migrar notificationSchema`
            },{
                value: 19,
                name: `${ '19.'.green } Depurar nombre TBProgramas`
            },{
                value: 20,
                name: `${ '20.'.green } Migrar Program`
            },{
                value: 21,
                name: `${ '21.'.green } Popular Subject Program`
            },{
                value: 22,
                name: `${ '22.'.green } Migrar calificaciones-Ratings`
            },
            {
                value: 0,
                name: `${ '0.'.green } Salir`
            },
        ]
    }
];



const inquirerMenu = async() => {

    console.clear();
    console.log('=========================='.green);
    console.log('  Seleccione una opción'.white );
    console.log('==========================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;
}

const pausa = async() => {
    
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`
        }
    ];

    console.log('\n');
    await inquirer.prompt(question);
}

const leerInput = async( message ) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if( value.length === 0 ) {
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listarLugares = async( lugares = [] ) => {

    const choices = lugares.map( (lugar, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value: lugar.id,
            name:  `${ idx } ${ lugar.nombre }`
        }
    });

    choices.unshift({
        value: '0',
        name: '0.'.green + ' Cancelar'
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Seleccione lugar:',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async(message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}   

const mostrarListadoChecklist = async( tareas = [] ) => {

    const choices = tareas.map( (tarea, i) => {

        const idx = `${i + 1}.`.green;

        return {
            value: tarea.id,
            name:  `${ idx } ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Selecciones',
            choices
        }
    ]

    const { ids } = await inquirer.prompt(pregunta);
    return ids;
}



module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listarLugares,
    confirmar,
    mostrarListadoChecklist
}
