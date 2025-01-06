/* 

  Handler - Funciones

  El handler en un evento 

  Hay re formas de escribir la funcion handler

  1.  Como una funcion  Externa
  2.  Como una funcion Anonima
  3.  Como una funcion Flecha

  Funcion Externa

  Esta funcion se escribe por fuera el evento y se pasa como argumento al addEventListener,

    funcion handler(){
        //codigo a ejecutar
    }

    elemento.addEventListener
    (tipoEvento, handler)

  Funcion Anonima

  Esta funcion se escribe dentro del evento y no tiene nombre.

    elemento.addEventListener(tipoEvento, function(){//codigo a ejecutar})

  Funcion Flecha

  Esta funcion se escribe dentro del evento, no tieen nombre pero es mas concisa

    elemento.addEventListener(tipoEvento, () => {//codigo a ejecutar})

  * Cuando el codigo que se ejecuta tiene mas de 1 linea, se debe escribir entre las llaves.
  * Si 
*/

const externa = document.getElementById("externa")
const anonima = document.getElementById("anonima")
const flecha = document.getElementById("flecha")

/* Funcion externa */

function funcionExterna() {
  console.log("Click en el boton externa")
}

externa.addEventListener('click', funcionExterna);

/* Funcion Anonima */

anonima.addEventListener('click', function(){
    console.log('Click en el boton anonima')
})

/* Funcion Flecha */

flecha.addEventListener('click', () => { console.log('Click en el boton flecha')})