export function validarform(productObj) {
    console.log(productObj);

    if (validarCampos(productObj)) {
        // Logica para agregar un producto despues de la validacion


    } else {

        return;
    }
}


function validarCampos({ name, description, image, stock, price }) {

    let validacion;
    if (name === '') {
        imprimmirAlertaHtml('Favor de llenar producto', 'error');
        validacion = false;
    } else if (stock === 0) {
        imprimmirAlertaHtml('Favor de llenar la cantidad', 'error');
        validacion = false;
    } else if (image === '') {
        imprimmirAlertaHtml('Favor de llenar imagen', 'error');
        validacion = false;
    } else if (price === 0) {
        imprimmirAlertaHtml('Favor de llenar el precio', 'error');
    } else if (description === '') {
        imprimmirAlertaHtml('Favor de llenar descripción', 'error');
        validacion = false;
    } else {

        validacion = true;
    }
    return validacion;
}

function imprimmirAlertaHtml(mensaje, estado) {
    const mensajeDiv = document.querySelector('.mensaje-alerta');
    const alertaForm = document.querySelector('.alerta-find');
    limpiarHtml();
    const alerta = document.createElement('P');
    alerta.classList.add('text-white')

    if (estado === 'error') {
        alerta.classList.add('bg-danger');
    } else {
        alerta.classList.add('bg-success');
    }
    alerta.style.width = '400px';
    alerta.textContent = mensaje;

    mensajeDiv.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);


}
function limpiarHtml() {
    const mensajeDiv = document.querySelector('.mensaje-alerta');
    const alertaForm = document.querySelector('.alerta-find');
    while (mensajeDiv.firstChild) {
        mensajeDiv.removeChild(mensajeDiv.firstChild)
    }

}

function limpiarHtml2() {
    const mensajeDiv = document.querySelector('.mensaje-alerta');
    const alertaForm = document.querySelector('.alerta-find');
    while (alertaForm.firstChild) {
        alertaForm.removeChild(alertaForm.firstChild)
    }

}