/* 

  Seleccionar el elemento h1 a traves de su clase

*/

const titulo =document.querySelector(".titulo")

/* 

  Monstramos el nodo seleccionado

  - Nodo expandido -> <h1>...</h1>
  - Nodo abstracto -> h1.title

  Nodo de la consola
*/

console.log(titulo)

/* 

Objeto style

Accdemos a el usando la notacion de punto (.)

  elemento.style

Resultado es CSS Styule Declartion.Es una lista querepresenta todas las propiedades de estilo de un elemento.

Unicamente muestra el valor de los estilos en linea declaramos directamentre en el elemento html.

*/

console.log(titulo.style)

/* 

  Propiedades de estilo

  Accedemos a las propiedades usando la notacion de punto(.)

    elemento.style.nombrePropiedad

  A diferencia de CSS, Las prpiedades de estilo en Js las escribimos usantdo el formato camelCase

  css -> Background-color (kebab-case )
  js ->BackgroundColor    (camelcase)

*/

console.log("Valores en linea. Color: " + titulo.style.color + " - titulo.style.color + " - fondo: " + titulo.style.backgroundColor)