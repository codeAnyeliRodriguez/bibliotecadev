/* function areYouPlayingBanjo(name){
  if(name.startsWith('r')){
    return `${name} plays bajo`
  }else if(name.startsWith('R')){
    return `${name} plays banjo`;
  }else{
    return `${name} does not play banjo`;
  }
} */

function areYouPlayingBanjo(name){
  if(name[0].toLowerCase()=='r'){
    return name + ' plays banjo';
  }else{
    return name + ' does not play banjo';
  }
}

persona = 'Carmen';
console.log(areYouPlayingBanjo(persona));
