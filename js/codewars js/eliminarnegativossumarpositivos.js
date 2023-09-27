/* Obtiene una matriz de números, devuelve la suma de todos los positivos.

Ejemplo [1,-4,7,12]=>1 + 7 + 12 = 20

Nota: si no hay nada que sumar, la suma es por defecto 0. */

// eliminar el numero negativo
// sumar positivos

let arr = [1,-4,7,12]

// reto
/* function positiveSum(arr){
  let arrpos = arr.filter(num => num >= 0);
  // console.log(arrpos)
 let total = arrpos.reduce((a, b) => a + b, 0);
return total
} */
console.log(positiveSum(arr));

// otros codigos
function positiveSum(arr){
  var total = 0;
  for (i = 0; i< arr.length; i++){
    if(arr[i] > 0){
      total += arr[i];
    }
  }
  return total 
}