import { redirect } from 'react-router-dom';

export function inciarSesion(user) {


    if (validarDatos(user)) {
        if (obtenerPersona(user)) {

            const sesion = {
                sesion: true,
                email: user.correo
            }


            localStorage.setItem('sesion', JSON.stringify(sesion));
            redirect('/colectivo-cuatro-react')

        } else {
            alertaHtml("Email o contraseña incorrectos", "error");

        }
    }
}

function obtenerPersona(persona) {
    const datosLocalStorage = JSON.parse(localStorage.getItem('usuario'));
    let respuesta = false;
    if (datosLocalStorage.some(personas => personas.correo == persona.correo)) {
        if (datosLocalStorage.some(personas => personas.correo == persona.correo)) {
            respuesta = true;
        } else {
            respuesta = false;
        }
    } else {
        respuesta = false;
    }
    return respuesta;
}





function validarDatos(datos) {
    let respuesta = false;

    if (datos.correo === '') {
        alertaHtml("Email o contraseña incorrectos", "error");
        respuesta = false;
    } else if (datos.contra === '') {
        alertaHtml("Email o contraseña incorrectos", "error");
        respuesta = false;
    } else {
        respuesta = true;
    }

    return respuesta
}


function alertaHtml(mensaje, estado) {
    const alerta = document.querySelector('.alerta');
    limpiarAlerta();
    const alertaMensaje = document.createElement('p');
    if (estado === "error") {
        alertaMensaje.classList.add('bg-danger', 'text-white', "alerta-error");

    } else {
        alertaMensaje.classList.add('bg-success', 'text-white', "alerta-error");
    }
    alertaMensaje.textContent = mensaje;
    alerta.appendChild(alertaMensaje);

    setTimeout(() => {
        alertaMensaje.remove();
    }, 3000);
}


function limpiarAlerta() {
    const alerta = document.querySelector('.alerta');
    while (alerta.firstChild) {
        alerta.removeChild(alerta.firstChild)
    }
}