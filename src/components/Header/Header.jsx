import '../../assets/styles/header.css'
import logo from '../../assets/images/home/logo-carita.png';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg  navegacion" data-bs-theme="dark">
                    <div className="container-fluid">
                        <Link className="color-texto-logo" to='/'>
                            <img src={logo} alt="Logo" width="35" height="35"
                                className="d-inline-block align-text-top" />
                            <span className="colectivo">Colectivo Cuatro</span>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link color-texto active" to='/'>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link color-texto" to='/productos'> Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link color-texto" to='contacto'>Contacto</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link color-texto" to='/nosotros'>Conócenos</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link to='/sesion' id="item-1" className="nav-link dropdown-toggle"
                                        role="button" aria-expanded="false" >
                                        Iniciar sesión
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li id="item-2"></li>
                                        <li id="item-3"></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to='/carrito' className="nav-link color-texto"><i
                                        className="fa-solid fa-cart-shopping"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>)

}



