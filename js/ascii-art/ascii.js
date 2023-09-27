const art = require('ascii-art');

console.log(art.style('Hello Word!', "red"));
console.log(art.style('', 'white'));

art.font('Hello Word!', 'doom' ,(err, renderer)=>{
  console.log(err || renderer);
})