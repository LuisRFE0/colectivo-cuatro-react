import { Link } from 'react-router-dom'
import imgLogin from '../../assets/images/home/Image_login.png'
import logo from '../../assets/images/home/logo-carita.png';
import '../../assets/styles/login.css'
export const Login = () => {

    return (
        <>
            <section className="">
                <div className="container-login ">
                    <img
                        className="triangulo"
                        src={imgLogin}
                        alt=""
                    />
                    <div>
                        <div className="form-container ">
                            <img src={logo} alt="" />
                            <h3 className="login-welcome color-font color-font-700">Ingresar</h3>
                            <form action="#" className="form">
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="staticEmail"
                                        className="col-sm-2 col-form-label color-font mx-2"
                                    >
                                        Email:
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputEmail"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 row">
                                    <label
                                        htmlFor="inputPassword"
                                        className="col-sm-2 col-form-label color-font mx-2"
                                    >
                                        Contraseña:
                                    </label>
                                    <div className="col-sm-10">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="inputPassword"
                                        />
                                    </div>
                                </div>
                                <div className="alerta text-center" />
                                <div className=" btns-login mt-5">
                                    <button className="btn-login">Ingresar</button>
                                    <a className="mt-4" href="#">
                                        Recuperar contraseña
                                    </a>
                                    <p className="text-center">
                                        ¿No tienes cuenta? Da{" "}
                                        <span>
                                            {" "}
                                            <Link to="/colectivo-cuatro-react/singup">click aquí</Link>
                                        </span>
                                        para registrarte
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )


}