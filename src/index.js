import cipher from './cipher.js';

console.log(cipher);

//Funcion para mostrar segunda ventana
  function mostrarventana() {
    document.getElementById("ventana").style.display = "block";
  }

  //Constantes
  const encriptar = document.getElementbyId('botoncodificar')
  const desencriptar = document.getElementbyId('botondescodificar')
  const desplazamiento = document.getElementbyId('desplazamiento')
  const textoEntrada =  document.getElementbyId('mensaje')
  const textosalida = document.getElementbyId('mensaje2')

//Funcion para que aparezca el texto codificado
  encriptar.addEventListener("click",function(){
    const textoEntrada= (document.getElementById("mensaje").value.)toUpperCase();
    desplazamiento = Number.parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("mensaje2").value = cifrar(texto,desplazamiento);
  }. true);


  //Funcion para que aparezca el texto decodificado
  encriptar.addEventListener("click",function(){
    const textoSalida= (document.getElementById("mensaje2").value.)toUpperCase();
    desplazamiento = Number.parseInt(document.getElementById("desplazamiento").value);
    document.getElementById("mensaje").value = descifrar(texto,desplazamiento);
  }. true);

  

  