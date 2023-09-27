function lovefunc(flower1, flower2) {
  if (flower1 % 2 == 0 && flower2 % 2 == 1) {
    console.log(true);
  } else if (flower2 % 2 == 0 && flower1 % 2 == 1) {
    console.log(true)
  } else {
    console.log(false);
  }

}

let flower1 = 8;
let flower2 = 7;

lovefunc(flower1, flower2)