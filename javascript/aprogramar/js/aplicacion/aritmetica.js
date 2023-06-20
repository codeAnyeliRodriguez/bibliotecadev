//------alt+ flecha arriba o abajo mueve una linea de codigo-----------
//let a=5,b=2,resultado=0;
let a=5,
    b=2,                //poner las variables de esta manera es una mejor practica
    resultado=0;

resultado= a+b;

resultado= a-b;

resultado= a*b;

resultado=a/b;

//modulo
resultado=a % b;

//potencia(a=base y b=exponente)
resultado=a**b;

//-----------------------
//orden de procedencia
resultado=2 + 2 * 5;

resultado=(2 + 2 ) * 5 ;

resultado=(2 + 2 ) * 5 / (2 + 3);//---
resultado=(4) * 5 / (5);            //aca se ilustra la logica con la que a sido resuelta una operacion
resultado=(20)/(5);              //----  
console.log(resultado);

//--------------------

a=10                    //-----
//a += 5; //a = a + 5;
a -= 5;//a = a - 5;
//console.log(a = a - 5);
console.log(a=a - 1);
console.log(a);
a *= 5//a = a * 5;      //es una unica operacion el valor de a va cambiando de acuerdo como se vayan resolviendo operaciones.
a /= 5//a = a / 5;
a %= 5; //a = a% 5;
a **= 5;//a=a **5;  //---------


 a= 3.00000000000000007 //cuando hay muchos decimales como en este caso lo que hace la maquina es que lo redondea
 console.log(a);
 a= 3.0000000000000007//aqui ya no redondea 
console.log(a);