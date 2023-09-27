// convertir de binario a entero
// En JavaScript, se puede convertir un número binario a decimal utilizando la función parseInt() y especificando la base 2 (que es la base del sistema binario). Aquí te muestro un ejemplo:
/* 
let binario = '1010';
let decimal = parseInt(binario, 2);
console.log(decimal)
 */
/*
Dada una matriz de unos y ceros, convierta el valor binario equivalente en un número entero.

Por ejemplo: [0, 0, 0, 1]se trata como 0001cuál es la representación binaria de 1.

Ejemplos:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
Sin embargo, las matrices pueden tener diferentes longitudes, no solo limitadas a 4.
*/
// alternativas
// const binaryArrayToNumber = arr => parseInt(arr.join(''),2);

/* const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
}; */



// solution
const binaryArrayToNumber = arr =>{
  let binario = arr.join('');
  // console.log(binario)
  let decimal = parseInt(binario, 2)
  // console.log(decimal)
  return decimal
}
arr = [1,0,1,0]
binaryArrayToNumber(arr)