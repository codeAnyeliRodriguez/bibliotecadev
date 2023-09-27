// 
// eliminar vocales de una cadena de caracteres
/* Para eliminar las vocales de un string en JavaScript, puedes utilizar varias técnicas. Aquí te muestro dos formas:

Utilizando expresiones regulares y el método replace(): */
/* 
const str = 'Hola mundo';
const newStr = str.replace(/[aeiou]/gi, "");
console.log(newStr); 
 */
/* En este ejemplo, se utiliza una expresión regular que encuentra todas las vocales (minúsculas y mayúsculas) en la cadena y las reemplaza con una cadena vacía.

Utilizando un bucle for y el método charAt(): */

const str = 'hola mundo HOLA MUNDO';
/* let newStr='';
for (let i = 0; i < str.length; i++){
  const char =str.charAt(i);
  if(char !=='a' && char !=='e' && char!=='i' && char!=='o' && char!=='u' && char!=='A' && char!=='E' && char!=='I' && char!=='O' && char!=='U'){
    newStr += char;
  }
}
console.log(newStr); */

/* En este ejemplo, se utiliza un bucle for para iterar sobre cada caracter de la cadena. Se verifica si el caracter es una vocal o no y se construye una nueva cadena sin las vocales.

Ambos métodos producen el mismo resultado, que es una nueva cadena sin vocales. Puedes elegir el método que te resulte más cómodo o que mejor se adapte a tus necesidades. */

// respuesta
function noVocals(str){
  console.log(newStr = str.replace(/[aeiou]/gi,""))
}

noVocals(str)

/* function disemvowel(str) {
  return str.replace(/[aeiou]/gi,"");
} */