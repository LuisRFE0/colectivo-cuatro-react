class SignupController {

    constructor() {
        this.datosPersona = [];
    }



    //Guardar persona en localstorage
    addPerson(datos) {
        this.loadPersonFromLocalStorage();
        const existePersona = this.verificarExistente(datos);
        if (existePersona) {
            console.log('Si esxiste la persina');
            return false;
        } else {
            console.log('No existe se puede registrar');
            let nuevoStorage = [...this.datosPersona, datos];
            localStorage.setItem('usuario', JSON.stringify(nuevoStorage));
            nuevoStorage = [];
            console.log(nuevoStorage);
            return true;
        }



        // console.log(this.datosPersona);
        // if (this.verificarExistente(datos)) {
        //     return false;
        // } else {
        //     
        //     
        //     return true;

        // }

    }


    verificarExistente({ correo }) {
        const respuesta = this.datosPersona.some(personaGuardada => {
            return personaGuardada.correo === correo;
        });
        return respuesta;
    }



    //Carga los usuarios del localstorage
    loadPersonFromLocalStorage() {
        const storageItems = localStorage.getItem("usuario")

        if (storageItems) {
            const user = JSON.parse(storageItems)
            this.datosPersona = [];
            for (let i = 0, size = user.length; i < size; i++) {
                const user2 = user[i];
                this.datosPersona.push(user2);
            }
        }

    }

}
export default SignupController;

