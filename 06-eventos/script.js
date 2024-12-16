/* 

  Evento

  Un evento es una accion o suceso que ocurre en el navegador o en un elemento DOM. Puede ser iniciado por el usuario o por el sistema y puede ser *manejados* mediante javascript.

  + Manejar Eventos

  Significa escribir codigo "reaccione" de cierta manera cuando algo esecifico suceda. Para manejar eventos es importante conocer algunos conceptos claves.

  1. Target (Blanco)

  El elemento target es el elemento del DOM en el que ocurrio el evento. Esto se eencuentra dentro del objeto evento(event) y se accede mediante la propiedad event.target

  2. Event Listener (Escuchador)

  El event listener es el "oido" que esta atento a que ocurra un evento en un elemento especifico.Usamos el metodo addEventListener para escuchar eventos.

  3. Trigger (Disparador)

  Es un simple el desencadentande que provoca que un event ocurra. Es la accion que realizara el usuario o el sistema para activar el evento

  +Hacer clic
  +Mover el raton
  +Escribir en un imput

  4.Event hadlres(Manejador)

  El event handlres es la funcion que se ejecuta cada vez que ocurre el evento.Con el codigo JS le decimos que hace ele event handler.

  + Modtrar un mensaje
  + Cambiar de color 
  + Lanzar una alerta 
  + ...

  Sintaxis

    target.eventListener( trigger ,eventHandler)
  
  - target:elemento donde ocurre


*/

/* 

  Seleccionar elemento

*/

const button = document.getElementById("button");
/* 

  Manejar el evento

*/

button.addEventListener("click" , mostrarMensaje);

/* 

  Definicion la funcion

*/

function mostrarMensaje()
{console.log("Le haz picado")}

