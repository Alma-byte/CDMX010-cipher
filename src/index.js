import cipher from './cipher.js';

console.log(cipher.encode( 10 ,"adios"))
console.log(cipher.decode( 10 ,"knsy}"))

//Funcion para mostrar segunda ventana
  function mostrarventana() {
  document.getElementById("ventana").style.display = "block";
  }

  //Constantes
  const encriptar = document.getElementById('botoncodificar')
  const desencriptar = document.getElementById('botondescodificar')
  const desplazamiento = document.getElementById('desplazamiento')
  const textoEntrada =  document.getElementById('mensaje')
  const textosalida = document.getElementById('mensaje2')



//Funcion para que aparezca el texto codificado
  encriptar.addEventListener("click", function() {
    const textoEntrada= document.getElementById("mensaje").value.toUpperCase();
    desplazamiento = Number.parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("mensaje2").value = cifrar(texto,desplazamiento);
  }. true);


  //Funcion para que aparezca el texto decodificado
  encriptar.addEventListener("click",function(){
    const textoSalida= document.getElementById("mensaje2").value.toUpperCase();
    desplazamiento = Number.parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("mensaje").value = descifrar(texto,desplazamiento);
  }. true);

  

  