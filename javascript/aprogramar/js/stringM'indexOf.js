//h o l a - m u n d o --> STRING O CADENA
//0 1 2 3 4 5 6 7 8 9 -->INDICE

//Metodo indexOf
// let saludo= "hola-mundo";
//console.log (saludo.indexOf('mundo'));
/* en el console.log de arriba el metodo .indexOf() me devuelve donde
empieza la cadena de caracteres mundo. si pongo Mundo con mayuscula 
me da -1 porque no encuentra una coincidencia. si pongo solamente la M en mayuscula
me da la posicion 5*/

//Hola-Mundo compliquemos el asunto
//console.log((saludo + " compliquemos el asunto").indexOf('el'));

//saludo= saludo + " compliquemos el asunto";
// console.log(saludo.indexOf('o',2));

// H o l a - M u n d o --> STRING O CADENA
// 0 1 2 3 4 5 6 7 8 9 -->INDICE

//Metodo slice
// let saludo='Hola-Mundo';
//console.log(saludo.slice(5,8));
// en este caso al metodo .slice() hay que darle la pocision de partida y la pocion donde me quiero quedar un lugar mas
// console.log(saludo.slice(5,-2));

let IngresadoPorUsurario = "$ 550.25";
// let pesos = Number(IngresadoPorUsurario.slice(2));//con number se convierte de string a numero
let pesos = +(IngresadoPorUsurario.slice(2));//con el signo de + tambien se puede convertir de string a numero
console.log(typeof pesos);
console.log(pesos);