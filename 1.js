let contenedor = document.getElementById("contenedor");


let seccion = prompt("Lista de Crypto(x) - Registro(r) - Carrito(c)").toLowerCase();

if (seccion === "x") {
  contenedor.innerHTML = "<h2>Lista Crypto</h2>";

  let productos = ["BTC", "ETH", "SOL", "BNB"]; 
  
  const [,, a, b] = productos

  alert(b)

} else if (seccion === "r") {

  const usuario = {
    nombre: prompt("ingrese su nombre"),
    edad : prompt("ingrese su edad")
  }

const {nombre, edad} = usuario

let persona = edad >= 18 ? true : false;

persona1 = persona ? "Señor" : "Joven";

alert("Ha sido registrado con exito" + " " + persona1 + " " + nombre)




}else if ( seccion === "c") {

  let productos = [
    { id: 1, nombre: "BTC", precio: 19839 },
    { id: 2, nombre: "ETH", precio: 1556 },
    { id: 3, nombre: "BNB", precio: 295 },
    { id: 4, nombre: "SOL", precio: 35.81 },
  ];
  
localStorage.setItem("carrito", JSON.stringify(productos));


let contenedor = document.getElementById("contenedor");


let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
/* let carrito = [];
let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
  carrito = carritoStorage;
} */

carrito.forEach(producto => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>ID: ${producto.id}</h2>
    <p>Nombre: ${producto.nombre}</p>
    <b>$${producto.precio}</b>
  `;

  contenedor.append(div);
 });

let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
  alert("carrito eliminado");
  contenedor.innerHTML = "";
  localStorage.clear();
});



} else{
  contenedor.innerHTML = "<h1>Bienvenido a swap</h1>";
}