const crearProductos = (nombre, precio, id, imagen) => {
    const card = document.createElement("div")
    const contenido = `
    <div class="small-container">
    <h2 class="title">Juegos Populares</h2>
    <div class="row">
        <div class="col-4">
            <a href="productos-detalles-gta.html">
            <img src="${imagen}">
            </a>
            <h4>"${nombre}"</h4>
            <p>"${precio}"</p>
        </div> `
     
        card.innerHTML = contenido
        card.dataset.id = id

        return card 


    const productos = document.querySelector('[data-product]')
}