// comprobar si es un numero cuadrado
// sacar la raiz cuadrada (Math.sqrt())
/* let num = 25;
let rc = Math.sqrt(num);
console.log(rc) */ //salida: 5

// comprobar si la raiz es un numero entero (Math.sqrt()) (Number.isInteger())
/* function esrc(num){
  let rc = Math.sqrt(num);
  return Number.isInteger(rc);
}

console.log(esrc(25)); //salida: true
console.log(esrc(10))// salida: false
 */
// solution
/* var isSquare = function(n){
  let rc = Math.sqrt(n);
  // return Number.isInteger(rc)
  console.log(Number.isInteger(rc))
} */


// alternativas
/* function isSquare(n){
  // return Math.sqrt(n) % 1 == 0;
  console.log(Math.sqrt(n) % 1 == 0);
} */

function isSquare(n){
  return Number.isInteger(Math.sqrt(n));
}
isSquare(25)