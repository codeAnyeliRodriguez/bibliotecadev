function rot13(str){
// 65-90 is A-Z
// 90->78;
// 83(5)->70(F)
let answer="";
for(let i=0; i<str.length; i++){
  let charat= str[i].charCodeAt();
  if(charat< 65 || charat > 90){
    answer += str[i];
  }else{
    let letterCode= charat + 13 > 90 ? (charat % 26) + 65: charat + 13;
    answer += String.fromCharCode(letterCode);
  }
}
return answer;
}

console.log(rot13("SERR PBQR PNZC"));