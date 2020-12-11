import cipher from './cipher.js';

console.log(cipher);

alert("Todos tus mensajes serán cifrados")

function showavatar(index){
  localStorage.setItem("avatares", index);
  window.location.href= "avatar" + index + ".html";
}
