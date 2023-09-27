function palindrome(str){
    str=str.replace(/\w|_/g, "").toLowerCase();
    let end= str.length-1;
 
 for(let i=0; i< str.length/2; i++){
    if (str[end]!== str[i]){
        return false;
    }
    end--;
 }
   return true; 
}

console.log(palindrome("eyyeh"));
