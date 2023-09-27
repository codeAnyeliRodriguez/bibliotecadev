function convertToRoman(num){
    let answer="";
    let pairs={
     M:1000,
     CM:900,
     D:500,
     CD:400,
     C:100,
     xc:90,
     L:50,
     xL:40,
     x:10,
     Ix:9,
     v:5,
     Iv:4,
     I:1,

    }
     let keys=Object.keys(pairs);
     console.log(keys);
    while(num > 0){
        let letter="I"
    for (let i= 0; i<keys.length; i++){
        if (num >= pairs[keys[i]]){
            letter=keys[i];
            break;
            }
        }
        answer += letter;
        num = num-pairs[letter];
        }
        return answer;
    }




console.log(convertToRoman(44));