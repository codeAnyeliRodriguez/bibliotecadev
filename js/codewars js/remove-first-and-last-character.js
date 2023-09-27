// Remove First and Last Character
/* It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters. */

function removeChar(str){
  return str.slice(1, -1);
}; 

/* function removeChar(str){
   str1 = str.split('');
   str1.shift();
   str1.pop();
   return str1.join('');
     
 }; */

 let cadena = "holii mundo";
console.log( removeChar(cadena));




/* Para eliminar el primer y el último carácter de un string en JavaScript, puedes utilizar el método slice() en combinación con el método substring(). Aquí tienes dos enfoques diferentes:

Usando slice():
javascript
Copy code
function eliminarPrimerUltimo(str) {
  return str.slice(1, -1);
}

const texto = "ejemplo";
const resultado = eliminarPrimerUltimo(texto);
console.log(resultado); // Salida: jempl
Usando substring():
javascript
Copy code
function eliminarPrimerUltimo(str) {
  return str.substring(1, str.length - 1);
}

const texto = "ejemplo";
const resultado = eliminarPrimerUltimo(texto);
console.log(resultado); // Salida: jempl
Ambos enfoques hacen básicamente lo mismo: toman una porción del string desde el segundo carácter hasta el penúltimo carácter, excluyendo el primer y el último carácter. Esto crea un nuevo string que es el resultado deseado. Recuerda que en JavaScript, los índices de los caracteres comienzan en 0, por lo que el primer carácter tiene índice 0 y el último carácter tiene índice length - 1. */

//  ¡Feliz codificación! 😊