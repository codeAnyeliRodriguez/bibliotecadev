//ctrl k + m =seleccionar lenguaje 
let cadena ='texto';
console.log(typeof cadena);

//objeto String
let cadena2 = new String('Texto 2');
console.log(typeof cadena2);

console.log(cadena.charAt(2)); 
//console.log(cadena2.toLowerCase());
let textoAminuscula= (cadena2.toLocaleLowerCase());
console.log(cadena.toUpperCase());

console.log(cadena2);
console.log(textoAminuscula);
/* se dice que JS es Case Sensitive, osea que distingue entre 
mayusculas y minusculas. Estas linas no son igulaes:texto, Texto, TEXto, texTO, etc. */
//.charAt(1) va al la posicion del String en este caso la posicion 1 que es la e
//.charAt(2) en este caso devuelve x
//.toUpperCase() me devuelve le texto en mayusculas
//.toLowerCase() me devuelve todo el texto en minuscula
//los metodos son como moldes de funciones
//metodos son funcines si estan declaradas dentro de una clase no se le llama metodos se les llama funciones
//invocar el metodo = llamar a la funcion de un objeto