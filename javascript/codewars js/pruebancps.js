console.log('holii')
var num=[1,2,3,4,6,7,40,-1,-4]
// var num = []

/* let contadorNegativos = 0;
let sumaNegativos = 0;

for(let i = 0; i < num.length; i++){
    if (num[i] < 0){
        contadorNegativos++;
        sumaNegativos +=num[i]
    }
}

console.log(contadorNegativos);
console.log( sumaNegativos);
 */

// operador ternario(operador condicional)
/* let edad = 20;
let mensaje = edad >= 18 ? 'mayor de edad' : 'menor de edad';
console.log(mensaje); */

// funcionalidad
/* 
 let contadorpositivos = 0;
let sumaNegativos = 0;
if (num == null || num.length == 0){
    console.log([])
}else{

for(let i = 0; i < num.length; i++){
    if (num[i] < 0){
        sumaNegativos +=num[i]
    }
    
   else if(num[i] > 0){
        contadorpositivos++;
    }
    
}

console.log(contadorpositivos);
console.log( sumaNegativos);
}
 */ 

// solution
function clasificar(num){
let contadorpositivos = 0;
let sumaNegativos = 0;
if (num == null || num.length == 0){
    console.log([])
}else{

for(let i = 0; i < num.length; i++){
    if (num[i] < 0){
        sumaNegativos +=num[i]
    }
    
   else if(num[i] > 0){
        contadorpositivos++;
    }
    
}
console.log([contadorpositivos, sumaNegativos])
}
}

clasificar(num);