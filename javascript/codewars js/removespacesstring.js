// Remove string spaces
function noSpace(x){
  // return x.trim()
  console.log(x.trim().replace(/\s+/g, ''))
}

let a = ' hola esto es un string sin espacios en blanco ';
noSpace(a)