export function sesionActiva() {

    return elementoSesion();

}

function elementoSesion() {
    const datosStorage = JSON.parse(localStorage.getItem('sesion')) ? JSON.parse(localStorage.getItem('sesion')) : [];
    if (datosStorage.sesion === true) {
        return true;
    } else {
        return false;
    }
}
export function hacere() {
    location.href = '/colectivo-cuatro-react';
}