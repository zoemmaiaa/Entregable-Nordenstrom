let carrito = [];
const productos = [];
const catalogo = [
  {flor: "amapola", precio: 10000, stock: 10},
  {flor: "lavanda", precio: 8000, stock: 7},
  {flor:"tulipan", precio: 1300, stock: 5}
];


/* Agregar producto al carrito y chequear si el producto ya fue agregado para solo sumarlo */

function agregarCarrito(flor) {
  let agregar = document.querySelector('.agregar');

  agregar.onclick = () => {
    carrito.push()
  }

  const encontrarProducto = catalogo.find(nombre => nombre.flor === flor);
  const productoEnCarrito = carrito.find(item => item.flor === flor);

 if (productoExistente) {
        productoExistente.cantidad++;
        localStorage.setItem("carrito", JSON.stringify(carrito));
  }
}


for (let item of carrito) {
    let mostrarCarrito = document.getElementById("carrito") 
    const li = document.createElement("li");
    li.textContent = `${item.flor} x${item.cantidad} - $${item.precio * item.cantidad}`;
 }

                          

/* Botones de carrito */

document.querySelectorAll('.producto').forEach(producto => {
    let mas = producto.querySelector(".mas");
    let menos = producto.querySelector(".menos");
    let cantidad = producto.querySelector(".cantidad");
    let contador = 0;

    mas.onclick = () => {
        contador++;
        cantidad.innerHTML = contador;
    };

    menos.onclick = () => {
        if (contador > 0) {
            contador--;
            cantidad.innerHTML = contador;
        }

    };
});


