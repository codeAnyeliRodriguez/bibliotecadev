let nombre,
    apellido,
    nombreCompleto,
    espacio;

nombre="juan";
apellido='perez';
espacio=" ";
nombreCompleto=nombre + apellido;

console.log(nombreCompleto);

console.log(nombre + " " + apellido);
console.log(nombre + espacio + apellido);
console.log(nombre,espacio,apellido);
console.log(nombre,"espacio",apellido)
console.log("el apellido registrado por usted es: " + apellido);

console.log('El significado de "DOM" es document objet model.');
console.log("El significado de 'DOM' es document object model.");
console.log('el apellido es: ${apellido} y su nombre es: ${nombre}');
console.log(`el apellido es: ${apellido} y su nombre es: ${nombre}`);
/* colocar backticks`` alt gr + ] y barra de espacio.
tambien puede usar alt + 96 
se coloca en tecla anterior al 1 en teclado ingles``*/

console.log(`El apellido del sr. ${"sr." + apellido} y su nombre ${nombre}`);