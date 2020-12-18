import cipher from './cipher.js';

console.log(cipher);

//Funcion para mostrar segunda ventana
  function mostrarventana() {
    document.getElementById("ventana").style.display = "block";
  }

//Funcion para que aparezca el texto codificado
  document.getElementById("botoncodificar").addEventListener("click",function(){
    let texto = document.getElementById("mensaje").nodeValue;
    let desplazamiento = document.getElementById("desplazamiento").nodeValue;
    document.getElementById("mensaje2").value = cifrar(texto,desplazamiento);
  }. true);
  