//modo estricto para programar con buenas practicas
'use strict'
//imprime en pantalla
console.log('Hola mundo desde Node.js, esto se verá en la terminal de comandos')
//hacemos una operación basica
console.log(2 * 5)
//al utilizar una instrucción de js frontend error en node js
console.log(window)
//imprime en consola todo lo relacionado con el modulo global
console.log(global)
//realizamos una funcion para imprimir cada segundo 'hola nodejs'
setInterval(function () {
    console.log('hola nodejs')
}, 1000)