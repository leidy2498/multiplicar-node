// / Requireds
const fs = require('fs'); //Proyecto 
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('==============='.red);
    console.log(`Tabla del ${base}`.red);
    console.log('==============='.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }



};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

// Exportar funciones
module.exports = {
    crearArchivo,
    listarTabla
}