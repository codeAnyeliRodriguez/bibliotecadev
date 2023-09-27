//console.log("script conectado exitosamente");
//el anterior console.log  a sido para textear si el index.html y el index.js han sido conectados correctamente
const txtop1 =document.getElementById("op1");
//console.log(txtop1)
const txtoperacion =document.getElementById("operacion");
const txtop2 =document.getElementById("op2");
const btncalcular =document.getElementById("calcular");
const presultado =document.getElementById("resultado");

btncalcular.addEventListener("click", calcular)
//.addEventListener() es un escuchador de eventos lo que hace es por asi decirlo escuchar el evento que pongamos en este caso onclick=click tambien se puede hacer desde el html pero en este caso se a hecho desde el el javascript

function calcular(){
	//console.log("apretaste boton calcular");
	const operacion=txtoperacion.value
	const op1=parseFloat(txtop1.value)
	const op2=parseFloat(txtop2.value)
	//if (operacion=="+" || operacion=="-" || operacion=="*" || operacion=="/"){
if((operacion=="+" || operacion=="-" || operacion=="*" || operacion=="/") && !isNaN(op1) && !isNaN(op2) ) {
		//console.log("calculo posible")
		switch(operacion){
		case"+":
			resultado=op1+op2
			break
		case"-":
			resultado=op1-op2
			break
		case"*":
			resultado=op1*op2
			break
		case"/":
			resultado=op1/op2
			break
		}//si en este caso no se usa el break se ejecutaran todas las operaciones por eso el breack es necesario en este caso
		//el break hace que salgamos del swich
		presultado.style="color: black"
		presultado.innerText="=	" + resultado	
	}else{
		//console.log("calculo imposible")
		presultado.style="color: red"
		presultado.innerText="calculo imposible"
	}
}
