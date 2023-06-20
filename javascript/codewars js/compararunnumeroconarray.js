


// con el metodo includes()
 function check(a, x) {
  if(a.includes(x)){
    return true
  }else {
    return false
  }
} 

// sin el metodo includes
/* function check(a, x){
let encontrado = false
for(i = 0; i < a.length; i++){
 if (x == a[i] ){
   encontrado = true;
   break;
  }
} 
return encontrado;
} */

// alternativa
/* function check(a,x){
  return a.includes(x);
} */
// alternativa 
// const check = (a,x) =>a.includes(x);

let a =[1,2,3,4,5]
let x = 3
check(a,x)