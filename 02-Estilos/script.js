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

console.log("Valores en linea. Color: " + titulo.style.color + " - fondo: " + titulo.style.backgroundColor);

/* 

   Metodo de propiedad

   Asignar el valor de la propiedad de estilo en el elemento seleccionado

      elemento.style.nombrePropiedad = "valor"

  - Forma mas directa y egible de asignar propiedades
  - Solo admite asignar propiedades con formato camelCase
*/

// let colorUsuario = prompt ("Escribe un color");

titulo.style.color = "blue" ;
titulo.style.backgroundColor = "red" ;

console.log("Valores asignados con JS. Color: " + titulo.style.color + " - fondo: " + titulo.style.backgroundColor);

/* 

  Metodo setProperty()

  Asignamos una propiedad de estilo al elemento seleccionado.

    elemento.style.setProperty(nombrePropiedad, valor, important)
  
  - Mas flexible y poderoso.
  - Las propiedades se escriben en formato kebab-case.
  - Parametro "important" es opcional.

*/

titulo.style.setProperty("color", "darkblue");
titulo.style.setProperty("background-color", "yellow", "important");

console.log("Valores asignados con setProperty. Color: " + titulo.style.color + " - fondo: " + titulo.style.backgroundColor);

/* 

  Eliminar valores de propiedades

  Usamos el metodo de propiedad y la definimos una cadena de texto vacia.

    elemento.style.nombrePropiedad = ""

    Esto elimina los valores previamente definidos en js y en los estilos en linea.
*/

titulo.style.color = "";
titulo.style.backgroundColor = ""; 

/* 

  Metodo removeProperty()

  Elimina la propiedad de estilo.

    elemento.style.removeProperty
    (nombrePropiedad)

  - Las propiedades se pasan en formato kebad-case
*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("backgroundColor");