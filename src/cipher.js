
encode (offset, string){
  let output= [];
  for (let i = 0; i < string.length, i++){
     let ascii= string.charCodeAt(i);
     let formula= (((ascii-65)+offset%26)+65);
     output [i]= String.fromCharCode(formula)
  }
  return output;
}

