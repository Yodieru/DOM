/* 

  Seleccionamos los elementos por su id

}*/

const titulo = document.getElementById("title");
const lista = document.getElementById("list");

/* 

Monstramos por consola

*/

console.log(titulo)
console.log(lista)

/* 

innerText

Devuelve un "String" del contenido visible dentro de un elemento.

  elemento.innerText

- Excluye los elementos ocultos
- Excluye los espacios en el documento.
- Excluye las etiquetas html

*/

console.log(">>> Con innerText")
console.log(titulo.innerText)
console.log(lista.innerText)

/* 

textContent

Devuelve un "string" del contenido visible dentro de un elemento.

  elemento.textContent

- Incluye los espacios
- Incluye los elementos ocultos
- Excluye las etiquetas html

*/

console.log(">>> Con textContent")
console.log(titulo.textContent)
console.log(lista.textContent)

/* 

  innerHTML

  Devuelve un "string" con la estructura interna de el elemento selecionado

    elemento.innerHTML

*/

console.log(">>> Con innerHTML")
console.log(titulo.innerHTML)
console.log(lista.innerHTML)

/* 

  Modificar el contenido con innerText

  Asignamos el valor el elemnto seleccionado

    elemento.innerText = "string"

*/

titulo.textContent = "Mis Pokemones 🤖";
lista.textContent = "cargando..."

/* 

  Modificar el contenido con innerHTML

  Asignamos el valor el elemEnto seleccionado incluyendo las etiquetas HTML

    elemento.innerHTML = "<tag>...</tag>"

*/

titulo.innerHTML = "¡Amigos <span>pokemones</span>!"
lista.innerHTML = "<li> Eevee🦊 </li> <li> Jigglypuff 🎶</li>"
