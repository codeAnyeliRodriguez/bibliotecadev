// Reverse List Order
let compras = [1, 2, 3, 4, 5];

/* function reverseList(list) {
  return list.reverse();
}
console.log(reverseList(compras)); */

function reverseList(list) {
  let exit = [];
  for (let i = list.length-1; i >= 0; i--) {
    exit.push(list[i]);
  }
  return exit;
}
console.log(reverseList(compras));