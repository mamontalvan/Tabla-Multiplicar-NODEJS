const { guardarTablaMultiplicar } = require('./helpers/multiplicar');
const argv = require('./config/yargs')
const colors = require('colors/safe');

console.clear();
guardarTablaMultiplicar(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(colors.green('Archivo', nombreArchivo, 'creado exitosamente!!')))
    .catch(err => console.log(err));