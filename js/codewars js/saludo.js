 function greet(name, owner){
    return name === owner ? 'Hello boss':'hello guest';
}


/* function greet (name, owner){
    return `Hello ${name==owner?'boss':'guest'}`
}
 */
/* function greet (name, owner) {
  if (name === owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
} */
console.log(greet('Anyeli', 'boss')); 