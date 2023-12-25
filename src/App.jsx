import '../src/assets/styles/main.css'
import logo from '../public/images/logo-carita.png'
export const App = () => {

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg  navegacion" data-bs-theme="dark">
                    <div className="container-fluid">
                        <a className="color-texto-logo" href="#">
                            <img src={logo} alt="Logo" width="35" height="35"
                                className="d-inline-block align-text-top" />
                            <span className="colectivo">Colectivo Cuatro</span>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link color-texto active" href="#">Inicio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link color-texto" href="#"> Productos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link color-texto" href="#">Contacto</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link color-texto" href="#">Conócenos</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a id="item-1" className="nav-link dropdown-toggle" href="#"
                                        role="button" aria-expanded="false" >
                                        Iniciar sesión
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li id="item-2"></li>
                                        <li id="item-3"></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link color-texto" href="#"><i
                                        className="fa-solid fa-cart-shopping"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>)

}

