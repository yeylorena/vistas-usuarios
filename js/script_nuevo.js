function cancelar() {
    para_txt.value = ""
    asunto_txt.value = ""
    mensaje_txt.value = ""
    advertencia.innerHTML = ""
}

function enviar() {
    if (para_txt.value.length > 0 && asunto_txt.value.length > 0 && mensaje_txt.value.length > 0) {
        alert(`El mensaje \"${asunto_txt.value}\" se ha enviado con exito`)
        cancelar()
    } else {
        advertencia.innerHTML = "Todos los campos son obligatorios."
    }
}