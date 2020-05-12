// Requireds
//Proyecto propio de Node
// const fs = require('fs'); no existe en node , es un paquete que se instala
// const fs = require('./fs'); son archivos que nosotros mismos escribimos


// let base = 3;
// let data = '';

// for (let i = 1; i <= 10; i++) {
//     data += `${base} * ${i} = ${base * i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`l archivo tabla-${base}.txt ha sido creado`);
// });


const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo.red}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}









//esto quiere decir que toma el parametro 2 para que se pueda destructuras y asi tomar nuestra base
// let parametro = argv[2];
// let base = parametro.split('=')[1]

// // Crea un archivo que se encargue de crear toda la logica

// se ejecuta el archivo asi : node app --bsae=5