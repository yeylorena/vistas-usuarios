function eliminarFilas() {
    // Obtén todas las filas en el cuerpo de la tabla
    filas = tabla.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    // Itera sobre las filas en reversa para evitar problemas con la eliminación
    for (var i = filas.length - 1; i >= 0; i--) {
        // Obtén el checkbox de la fila actual
        checkbox = filas[i].getElementsByTagName('input')[0];
        // Si el checkbox está marcado, elimina la fila
        if (checkbox.checked) {
            filas[i].parentNode.removeChild(filas[i]);
        }
    }
}

function seleccionarTodo() {
    // Obtén todas las filas en el cuerpo de la tabla
    var filas = tabla.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    // Itera sobre las filas y marca o desmarca los checkboxes
    for (var i = 0; i < filas.length; i++) {
        var checkbox = filas[i].getElementsByTagName('input')[0];
        checkbox.checked = todo_check.checked;
    }
    actualizarContador()
}

function actualizarContador() {
    var checkboxes = document.querySelectorAll('#tabla tbody input[type="checkbox"]:checked');
    seleccionados.textContent = `Seleccionados: ${checkboxes.length}`
}

// Agrega un listener a todos los checkboxes dentro de la tabla
var checkboxesTabla = document.querySelectorAll('#tabla tbody input[type="checkbox"]');
checkboxesTabla.forEach(function (checkbox) {
    checkbox.addEventListener('change', actualizarContador);
});