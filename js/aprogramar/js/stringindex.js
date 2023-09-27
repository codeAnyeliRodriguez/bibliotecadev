let cadena= 'hola mundo desde javascript';
console.log(typeof cadena);
console.log(cadena.length);

console.log(cadena[5]);
cadena[4] = 'x';
console.log(cadena[cadena.length - 1]);

/**en el caso de .length-1 se puede poner 
 * cualquier pocision osea .length-2 o .length - 3
*/
// los strings son basicamente objetos
/**                 String
 * cadena:  Hola-mundo
 * indice:  0123456789
 * largo:   12345678910
 */

/* la cadena no muta , lo que puede pasar es que la cadena
 cambia porque estoy 
recuperando lo que un usuario ingreso, 
y eso puede ser dirferente cada vez. */