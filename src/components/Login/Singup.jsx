import logo from '../../assets/images/home/logo-carita.png';
import imgLogin from '../../assets/images/home/Image_login.png'
import { useState } from 'react';
import { validarForm } from '../../assets/js/login/singupFunction';
import '../../assets/styles/singup.css';

const Singup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    const validarFormComponente = (e) => {
        e.preventDefault();
        const datosPersona = {
            nombre: name,
            correo: email,
            contra: password,
            confrimContra: confirmPassword
        }
        validarForm(datosPersona);
    }


    return (
        <>
            <section>
                <div className="container-login">
                    <img
                        className="triangulo"
                        src={imgLogin}
                        alt=""
                    />
                    <div>
                        <div className="form-container ">
                            <img src={logo} alt="" />
                            <h3 className="login-welcome color-font color-font-700">
                                Crear cuenta
                            </h3>
                            <form action="#" id="form" onSubmit={validarFormComponente}>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="input-nombre"
                                        className="col-sm-2 col-form-label color-font mx-2"
                                    >
                                        Nombre
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            onChange={function (e) {
                                                setName(e.target.value);
                                            }}
                                            type="text"
                                            className="form-control"
                                            id="input-nombre"
                                            placeholder="Maria antonieta de las nieves"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="input-email"
                                        className="col-sm-2 col-form-label color-font mx-2"
                                    >
                                        Correo:
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            onChange={function (e) {
                                                setEmail(e.target.value);
                                            }}
                                            type="email"
                                            className="form-control"
                                            id="input-email"
                                            placeholder="example@mail.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="input-password"
                                        className="col-sm-2 col-form-label color-font mx-2"
                                    >
                                        Contraseña:
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            onChange={function (e) {
                                                setPassword(e.target.value);
                                            }}
                                            type="password"
                                            className="form-control"
                                            id="input-password"
                                            placeholder="Ingrese una contraseña"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="input-confirm-password"
                                        className="col-sm-2 col-md-6 col-form-label color-font mx-2"
                                    >
                                        Confirmar contraseña:
                                    </label>
                                    <div className="col-sm-10 col-md-10">
                                        <input
                                            onChange={function (e) {
                                                setConfirmPassword(e.target.value);
                                            }}
                                            type="password"
                                            className="form-control"
                                            id="input-confirm-password"
                                            placeholder="Confirma la contraseña"
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-10 btns-login">
                                    <div id="alerta" className="text-center"></div>
                                    <button className="btn-login" type="submit">
                                        Crear cuenta
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br />

        </>

    )
}

export default Singup

