/* 

  Obtenemos un elemnto de referencia.

  - Este es el nodo de html donde vamos a crear un nuevo elemento.

*/

const movies = document.getElementById("movies");

/* 

  Crear un nuevo elemento usamos createElement

    document.createElement(tipo de elemento)

  - El tipo de elemento pasa como string "" o ''
  - Se debe guardar en una variable o constante

*/

const newMovie = document.createElement("li");

/* 

  Para agregar el elemento al DOM desde la referencia usamos el metodo append()

    elementoReferencia.append(nuevoElemento)

  - El nuevo elemento no pasa como string

*/

movies.append(newMovie)

/* 

  Agregamos texto al nuevo elemento con innerText

    elemento.innerText = valor

  - Valor pasa como stringt "" o ''

*/

newMovie.innerText = "Tetris 👾"

/* 

  Agregamos las clases al nuevo elemento con el metodo add()

    elemento.classList.add()

  - La clase pasa como string
  - El metodo acepta mas de un parametro separados con comas

*/

newMovie.classList.add("list-item", "bg-two")


const movie2 = document.getElementById("movies");
const newMovie2 = document.createElement("li");
movie2.append(newMovie2)
newMovie2.innerText = "Your Name 📱"
newMovie2.classList.add("list-item", "bg-one")
