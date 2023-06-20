/*  function arrayinvertido(numero){
   const cadena = numero.toString();
   const numeroinvertido = [];

   for(let i = cadena.length - 1; i >= 0; i--){
     numeroinvertido.push(parseInt(cadena[i]));
   }
   return numeroinvertido;
 }


 const numero = 122353456;
 console.log(arrayinvertido(numero)); */

/* 
function numeroAArrayInvertido(numero) {
  const cadena = numero.toString();
  const arrayInvertido = [];
  
  for (let i = cadena.length - 1; i >= 0; i--) {
    arrayInvertido.push(parseInt(cadena[i]));
  }
  
  return arrayInvertido;
}

// Ejemplo de uso
const numero = 12345;
const arrayInvertido = numeroAArrayInvertido(numero);

console.log(arrayInvertido); // Output: [5, 4, 3, 2, 1] */


function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}

const n =654321
console.log(digitize(n));