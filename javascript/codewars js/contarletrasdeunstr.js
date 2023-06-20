// var str = '12345678'
// console.log(str.length)

function getCount(str){
  return(str.match(/[aeiou]/ig) ||[]).length;
}

getCount('13n3i5h6o7oh890')

// solution
/* function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
} */