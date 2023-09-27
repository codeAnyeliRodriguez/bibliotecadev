//console.log("hola mundo");
//console se ven en la consola del navegador en la seccion de console//

/*var numero= 5;
console.log(numero);*/

//las variables pueden ser de 3 tipos: texto, numero o buleano(true, false) var miVariable= true;//
 //let y const son formas mas modernas de declarar una variable y son palabras claves o reservadas//
//var miVariable= 24;
//let miVariable2;//

//const miConstante=3;
//a una constante no se le puede cambiar el valor si vale 3 siempre va a valer 3//

//console.log("mi edad es: " + miVariable);
//el punto y coma al final es obcional indica el fin de la linea//

//miVariable=12;
//console.log('mi edad ahora es:'+ miVariable)

//console.log("el valor de miConstante es:" + miConstante);

//miConstante= 4;
//console.log("el valor de mi constante ahora es:" + miConstante);
// este codigo de constantes va a fallar porque no se le puede cambiar el valor a una constante es ilegal

//var resultado= 2 + 2;
//console.log("resultado vale: "+ resultado);

//console.log(2 + 2);
//este es otra manera de sumar sin utilizar una variable solo el console.log

//console.log(6 / 2);

/*var op1= 2;
var op2= 3;
var resultado= op1 + op2;
console.log("resultado vale: " + resultado);*/
//operaciones aritmeticas con variables

//condicionales
/*let miNumero= 6;
let miNombre="anyeli"*/

//let resultadoPregunta= miNumero== 6
//al poner 3 igules no solamente se pregunta por el valor de la variable tambien estamos preguntando por el tipo de la variable

//&& doble ampersan significa y las dos condiciones se deben cumplir
//|| esto significa o. se debe cumplir una condicion o la otra


//if(miNumero < 2 || miNombre == "sam"){
//	console.log('si.');
//} else{
//	console.log('no.');
//}

//1 igual es de asignacion y 2 iguales son de comparacion

//let miNumero2 = 0
//if (miNumero2 > 0){
//	console.log("mi numero es positivo")

//	}else if(miNumero2 === 0){
//		console.log("mi numero es zero");
//	}else{
//		console.log("mi numero es negativo");
//	}

/*bucles(o ciclo)
while
for*/

/*let contador= 0
while(contador < 5){
	console.log("hola a todos")
	contador=contador + 1
}*/

//let contador= -5;
//while(contador < 100){
//	console.log(contador);
//	contador= contador+ 1;

//for(let contador= 0; contador < 10; contador = contador +1){
//	console.log(contador);
//}

//for(let i = 1000; i >= 0; i--){
//	console.log(i);
//}
//este codigo hace que la console cuente de cierto numero hacia abajo en este caso es desde el 1000 

/*funciones
una funcion es como una maquinita a la que le puedo pasar argumentos y la funcion me va a devolver algo.

las ventajas de las funciones son similares a las ventajas que tienen las variables se pueden reutilizar. las variables guardan un valor y las funciones guardan funcionalidad*/

function saludar(nombre, edad){
	console.log("hola. mi nombre es " + nombre);
	console.log("y mi edad es " + edad);
} 

saludar('anyeli',21);//las funciones pueden recibir muchos caracteres de tipo texto, numeros o buleanos
//en la linea 102 es que se llama la funcion por lo que en esa linea es donde se va a ejecutar la funcion
//las funciones pueden recibir 1 o varios argumentos

//funciones que retornan

//nota se puede llamar la funcion antes de crearla

/*function multiplicar(num1,num2){
	let resultado=num1*num2;
	return resultado;
	}	*/

	//let recibidor=multiplicar(2,5);
	//console.log(recibidor);

//console.log(multiplicar(2,5));

//arreglos o arrays
/*let miarreglo=["david","fernando","kevin","carla"];
for(let i=0; i< 4; i++){

	let mostrar=miarreglo[3]
	console.log(mostrar)
	for(let i=0; i<4; i++){
	
	}
}*/

/*let miarreglo=["david","fernando","kevin","carla"];
for(let i=0; i< 4; i++){
	console.log("accediendo al indice:" + i);
	let mostrar=miarreglo[i];
	console.log(mostrar);
	
}
*/



//objetos
//let miobjeto = {
	//miLlave: "mi valor"
let persona={
	nombre:"anyeli",
	edad:21,
	femenino: true,
};
console.log(persona);
//persona.comidafavorita="hamburguesa"
persona.edad="nuevo edad"
console.log(persona);


//let persona2={
	//nombre:"kevin",
	//edad: 21,
	//masculino: false,
///}

//console.log(persona);
//console.log(persona2);

//let arreglodeobjetos=[persona,persona2]

