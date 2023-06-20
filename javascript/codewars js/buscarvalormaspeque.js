let numeros = [1, 2, 3, 4, 5, 6, -352, -400];

//  function findSmallestInt(args){
  // return Math.min(args);
  // console.log(Math.min(...args))
// } 

/* class SmallestIntegerFinder {
  
  findSmallestInt(args) {
    return Math.min(...args)  
    }
  } */

  function findSmallestInt(args) {
    let smallestInteger;
 
    for (let i = 0; i < args.length; i++){
        if ( args[i] <= args[0] ) {
            args[0]  = args[i];    
            smallestInteger = args[i];
        }
      }
    // return smallestInteger;
    console.log(smallestInteger);
  }
  
  findSmallestInt(numeros)