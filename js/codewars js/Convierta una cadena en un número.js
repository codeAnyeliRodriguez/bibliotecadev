// ¡Convierta una cadena en un número!
/* Nota: ¡Este kata está inspirado en Convert a Number to a String! . Prueba ese también.

Descripción
Necesitamos una función que pueda transformar una cadena en un número. ¿Qué formas de lograr esto conoces?

Nota: no se preocupe, todas las entradas serán cadenas y cada cadena es una representación perfectamente válida de un número entero.

Ejemplos
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
 */

const stringToNumber = function(str){
  return parseInt(str)
}

stringToNumber('12345')