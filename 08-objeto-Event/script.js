/* 

  Objeto event

  El objeto event representa un suceso que ocurre en el navegador, como un clic, pulsar una tecla o el movimiento del mouse y proporciona informacion sobre las propiedades y metodos para manejarlo.

  Para acceder al objeto event (e) se pasa automaticamente como un argumento a la funcion manejadora.

  Sintaxis

  fuction funcionManejadora(event) {
    //Codigo a ejectura... 
    console.log(event) //Muestra la lista de propiedades y metodos
  }

  Propiedades del Objeto event

  - type: sevuelve el tipo del evento
  - target: devuelve el elemento donde ocurre el evento
  - timeStamp: Devuelve la marca del tiempo en milisegundos desde la carga de la pagina.

  - code: Devuelve el codigo de la tecla precionada
  - key: Devuelve el valor dela tecla precionada

  - ClientX: Devuelve la posicion horinzontal de puntero del mouse en relacion a la ventana del navegador
  - ClientY: Devuelve la posicion vertical de puntero del mouse en relacion a la ventana del navegador
*/

const button = document.getElementsByClassName("button")

/* console.log(button[0]); */
button[0].addEventListener('click', monstrarObjetoEvento);

/* Accedemos al objeto evento */

function monstrarObjetoEvento(event){
  /* Codigo que se ejecuta */
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.target.innerText);
}

document.addEventListener('keydown', function(e){
  console.log(e);
  console.log(e.type);
  console.log(e.code);
  console.log(e.key);
})

document.addEventListener("mousemove", (e) => {
  console.log(e);
  console.log("Cord x: " + e.clientX + "Cord y: " + e.clientY);
})