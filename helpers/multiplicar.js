const fs = require('fs');
const colors = require('colors/safe');

//Empleando ASYNC
const guardarTablaMultiplicar = async(base = 5, listar = false, hasta = 10) => {
    try {
        let salida = '';
        let consola = '';
        if (listar) {
            consola += colors.cyan("========================================\n");
            consola += colors.cyan(`   TABLA DEL ${base} \n`);
            consola += colors.cyan("========================================\n");
        }
        salida += `======= TABLA DE MULTIPLICAR =======\n`;
        salida += `     base: ${base} | límite: ${hasta} \n`;
        salida += `====================================\n`;
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } * ${ i } = ${ base * i}\n`;
            consola += colors.yellow(`${ base } * ${ i } = ${ base * i}\n`);
        }

        consola += colors.cyan("========================================");

        if (listar) {
            console.log(consola)
        }

        fs.writeFileSync(`./output/tabla-${base}.txt`, salida);

        return (`tabla-${base}.txt`);
    } catch (error) {
        throw error;
    }
}
module.exports = {
    guardarTablaMultiplicar
}