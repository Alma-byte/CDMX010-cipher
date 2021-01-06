import cipher from './cipher.js';

console.log(cipher.encode( 10 ,"adios"))
console.log(cipher.decode( 10 ,"knsy}"))

   //Funcion para mostrar segunda ventana con evento del DOM addEventListener
  const avatarlisa = document.getElementById ("avatarlisa")
  avatarlisa.addEventListener("click",mostrarventana, true);

 function mostrarventana() {
  //console.log("mostrarventana")
  let ventana = document.getElementById("ventana");
  ventana.style.display = "block";
  }

   //Constantes y llamados
  const desplazamiento = document.getElementById('desplazamiento')
  const botoncodificar = document.getElementById("botoncodificar").addEventListener("click",encriptar, true);
  const botondescodificar = document.getElementById("botondescodificar").addEventListener("click",decencriptar, true);

   //Funcion para que aparezca el texto codificado
   function encriptar(){
    let textoEntrada= document.getElementById("mensaje").value.toUpperCase();
   // console.log('textoEntrada', textoEntrada)
    const desplazamientoParseado = Number.parseInt(desplazamiento.value);
    const resultado = cipher.encode(desplazamientoParseado, textoEntrada);
    document.getElementById("mensaje2").textContent = resultado;
  }

  //Funcion para que aparezca el texto decodificado
  function decencriptar(){
    let textoSalida= document.getElementById("mensaje").value.toUpperCase();
   // console.log('hola', textoSalida)
    const desplazamientoParseado = Number.parseInt(desplazamiento.value);
    const resultado = cipher.decode(desplazamientoParseado, textoSalida);
    document.getElementById("mensaje2").textContent = resultado;
  }

  //toUpperCase() método devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
  //Convierte (parseInt) un argumento de tipo cadena y devuelve un entero de la base especificada.

  

  
 