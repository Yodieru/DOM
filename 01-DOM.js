 /* 

DOM


Tipos

*/

/* 

Nodo de Documento
Este nodo representa el documento completo de html.
Incluye el contenido desde ls "raiz" - root, hsdts los elementos hijos.

para acceder usamos
--> document
*/

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

  /* 
  
  Nodo Elementos, usamos 

  Para seleccionr  nodos de elemntos usamos

  getElementsByTagName("etiqueta")

  Se escribe despes del nodo "document"
  
  */

/*  let tittle = document.getElementsByName("hi")
 console.log(tittle) */

 /* 
 
 Nodos de atributo

 Son los nodos que accdemos a atraves de su clase o de su id

 getElementsById("nombreId")
 getElementsByClassName("nombreClase")

 querySelector("nombreSelector") -> Selecciona el primer elemento que encuentre con el selector.

 querySelectorAll("nombreSelector") -> Selecionar todos los elementos con el mismo selector
 */

/*  let title = document.getElementById("title")

 console.log(title);
 console.log(title.innerText);
 console.log(title.id);

 let text = document.getElementsByClassName ("paragraph")

 console.log(texts)
 console.log(texts[0],textContent);
 console.log(texts[1],textContent); */

 // let titulo = document.querySelector("h1"); // Tag
// let titulo = document.querySelector("#title"); //id
 let titulo = document.querySelector(".title");

 console.log(titulo)

 // let parrafos = document.querySelectorAll("p"); //Tag
 // let parrafos = document.querySelectorAll("#paragraph"); //Id
  let parrafos = document.querySelectorAll(".paragraph"); //Class

 console.log(parrafos)

 /* 
 
 Nodo de texto

 Son los elementos de texto contenidos en las etiqetas

 .innerText
 .textContent
 
 */

 let subtitle = document.querySelector(".subtitle");

 console.log(subtitle.innerText);
 console.log(subtitle.textContent);

 /* 
 
  Nodos de Con¿mentarios

  Tienen un valor de 8 dentro de DOM
 
 */

  let comentario = document.COMMENT_NODE
  console.log(comentario)