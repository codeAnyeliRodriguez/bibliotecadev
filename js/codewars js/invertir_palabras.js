/* Complete la función que acepta un parámetro de cadena e invierte cada palabra de la cadena. Deben conservarse todos los espacios en la cadena.

Ejemplos
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

/* i deseas invertir únicamente el orden de las letras dentro de cada palabra en una cadena de caracteres, puedes seguir los siguientes pasos:

Divide la cadena en palabras individuales.
Itera sobre cada palabra y invierte el orden de sus caracteres.
Une las palabras invertidas en una nueva cadena. */

function invertirLetras(cadena){
  // Divide la cadena en palabras individuales
  var palabras = cadena.split(" ")
  // console.log(palabras);
  // Itera sobre cada palabra y invierte el orden de sus caracteres
  var palabrasInv = palabras.map(function(palabra){
    // console.log(palabra.split("").reverse().join(""));
    return palabra.split("").reverse().join("");
  });

  // une las palabras invertidas en una nueva cadena
  var cadenaInv = palabrasInv.join(' ');

  return cadenaInv
}

cadenaorg = 'hola mundo.'
console.log(invertirLetras(cadenaorg));

// solucion
function reverseWords(str) {
  let words = str.split(" ");
   let wordsrev = words.map(function(word){
     return word.split("").reverse().join("");
 });
   
   let chainInv = wordsrev.join(" ");
   return chainInv
   }