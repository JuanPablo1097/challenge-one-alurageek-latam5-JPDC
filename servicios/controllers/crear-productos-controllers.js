import { productosServicios } from "../../Javascript/productos-servicios"

const form = document.querySelector('[data-form]')

form.addEventListener("submit", (evento) => {
    evento.preventDefault()


const url = document.querySelector('[data-url]').value
const nombre = document.querySelector('[data-nombre]').value
const precio = document.querySelector('[data-precio]').value

productosServicios.crearProductos(imagen, nombre, precio)
.then(respuesta => {
window.location.href = "index.html"
comsole.log(respuesta)
}).catch(error => {
console.log(error)
})
})