// Isograms
/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

isIsogram "Dermatoglyphics" = true
isIsogram "moose" = false
isIsogram "aba" = false */

function isIsogram(str){
  let cont = {};
  for(let i = 0; i < str.length; i++){
    let caracter = str[i].toLowerCase();
    if(cont[caracter]){
      return false;
    }else{
      cont[caracter] = 1;
    }
  }
  return true;
}

const letra = 'leetra';
console.log(isIsogram(letra));

/* ChatGPT
Un isograma es una palabra o frase en la que no hay letras repetidas. Para determinar si un string es un isograma o no en JavaScript, puedes seguir un enfoque similar al que mencioné en la respuesta anterior para verificar si una letra se repite más de una vez en una cadena. Sin embargo, en este caso, en lugar de simplemente comprobar si una letra se repite, necesitas verificar si ninguna letra se repite. Aquí tienes un ejemplo de cómo podrías hacerlo:

javascript
Copy code
----------
function esIsograma(cadena) {
  const contador = {};

  for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena[i].toLowerCase(); // Convertir a minúsculas para no distinguir entre mayúsculas y minúsculas

    if (contador[caracter]) {
      return false; // Si la letra ya ha sido encontrada, no es un isograma
    } else {
      contador[caracter] = 1;
    }
  }

  return true; // Si no se encontraron letras repetidas, es un isograma
}

const cadena1 = "murcielago";
const cadena2 = "palabra";
-----------

console.log(esIsograma(cadena1)); // Devuelve true, es un isograma
console.log(esIsograma(cadena2)); // Devuelve false, no es un isograma
En este ejemplo, la función esIsograma recibe una cadena y verifica si alguna letra se repite en la cadena. Utiliza un objeto contador para llevar un registro de las letras que ha encontrado. Si encuentra una letra que ya ha sido registrada, devuelve false, lo que significa que la cadena no es un isograma. Si completa el recorrido de la cadena sin encontrar letras repetidas, devuelve true, indicando que la cadena es un isograma.

Nuevamente, ten en cuenta que este enfoque distingue entre mayúsculas y minúsculas. Si deseas ignorar la diferencia entre mayúsculas y minúsculas, asegúrate de convertir toda la cadena a minúsculas (o mayúsculas) antes de realizar la verificación.




 */