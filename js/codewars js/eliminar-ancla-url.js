/* Remove anchor from URL */
/* Complete the function/method so that it returns the url with anything after the anchor (#) removed. */
// Examples

/* "www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1" */

function removeUrlAnchor(url){
let frg = url.split("#");
/* let result = frg[0];
console.log(result);  */
console.log(frg[0]);
}
 let url = 'www.codeanyelirodriguez#inicio';
 removeUrlAnchor(url);