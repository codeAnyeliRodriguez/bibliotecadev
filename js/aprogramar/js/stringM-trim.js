let cadena='    esto es     una cadena con      problemas de espacios.'
console.log(cadena.trim());
console.log(cadena);
cadena=cadena.trim().toUpperCase();
/* esto es como una variable la cadena con problemas de espacio
 deja de existir y ahora tiene un nuevo valor y ahora tambien estara en 
 mayusculas y si a sido guardado*/

console.log(cadena.toLocaleLowerCase());

//en el caso de console.log anterior el toLocaleLowerCase() es temporal porque es un console.log
console.log(cadena);
//.trim() es un metodo que elimina los espacios en blanco de una cadena 