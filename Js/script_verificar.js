function eliminarFila(boton) {
    // Obtén la referencia a la fila actual
    fila = boton.parentNode.parentNode;
    // Obtén la referencia a la tabla
    tabla = fila.parentNode;
    // Elimina la fila de la tabla
    tabla.deleteRow(fila.rowIndex - 1);
    precioFinal()
}

function precioFinal() {
    // Obtén todas las celdas de precio
    celdasPrecio = document.querySelectorAll('.precio');
    // Inicializa la suma
    suma = 0;
    // Recorre cada celda de precio y suma sus valores
    celdasPrecio.forEach(function (cel) {
        suma += parseFloat(cel.textContent);
    });
    // Muestra la suma en la celda correspondiente
    precio_total.textContent = suma.toFixed(3);
}
precioFinal()

function descartarCompra() {
    // Muestra una ventana de confirmación
    var confirmacion = confirm('¿Estás seguro que desea descartar la compra?');
    // Verifica la respuesta
    if (confirmacion) {
        tabla.parentNode.removeChild(tabla);
    }
}