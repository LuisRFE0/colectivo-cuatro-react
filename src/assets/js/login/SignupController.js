class SignupController {

    constructor() {
        this.datosPersona = [];
    }



    //Guardar persona en localstorage
    addPerson(datos) {

        this.loadPersonFromLocalStorage();
        console.log(this.datosPersona);
        if (this.verificarExistente(datos)) {
            return false;
        } else {
            this.datosPersona = [...this.datosPersona, datos];
            localStorage.setItem('usuario', JSON.stringify(this.datosPersona));
            this.datosPersona.pop();
            return true;

        }

    }


    verificarExistente(datos) {

        return this.datosPersona.some(persona => persona.email == datos.email);
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

