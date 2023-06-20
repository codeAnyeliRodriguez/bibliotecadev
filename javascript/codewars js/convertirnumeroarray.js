
/* function cuentaregresiva (n){
let numero = [];
  for (let i = n; i>=1;i--){
    numero.push(i)
  }
  console.log(numero);
}

cuentaregresiva(8) */

const reverseSeq = n =>{
  let answer =[];
  for(let i = n; i > 0; i--){
    answer.push(i);
  }
  // return answer;
  console.log(answer)
}

reverseSeq(5);