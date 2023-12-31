import '../../assets/styles/header.css'
import logo from '../../assets/images/home/logo-carita.png';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { hacere, sesionActiva } from '../../assets/js/login/sesionIniciada';

const sesion = sesionActiva();
export const Header = () => {
    const location = useLocation();
    const [url, setUrl] = useState(null);

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);



    const redirect = () => {

        localStorage.removeItem('sesion');
        hacere();
    }


    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg  navegacion" data-bs-theme="dark">
                    <div className="container-fluid">

                        <Link to="/colectivo-cuatro-react" className='color-texto-logo'>
                            <img src={logo} alt="Logo" width="42" height="42"
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
                                    <Link to="/colectivo-cuatro-react/" className={url === "/colectivo-cuatro-react/" ? "nav-active" : ""}>Inicio</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/colectivo-cuatro-react/productos" className={url === "/colectivo-cuatro-react/productos" ? "nav-active" : ""}> Productos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/colectivo-cuatro-react/contacto" className={url === "/colectivo-cuatro-react/contacto" ? "nav-active" : ""}>Contacto</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/colectivo-cuatro-react/nosotros" className={url === "/colectivo-cuatro-react/nosotros" ? "nav-active" : ""}>Conócenos</Link>
                                </li>


                                <li className="nav-item dropdown">
                                    <Link to='/colectivo-cuatro-react/login' id="item-1" className="nav-NavLink dropdown-toggle"
                                        role="button" aria-expanded="false" data-bs-toggle={sesion ? 'dropdown' : ''} >
                                        {sesion ? 'Cuenta' : 'Iniciar sesión'}
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li id="item-2">Perfil</li>
                                        <li id="item-2"><Link to="/colectivo-cuatro-react/productsform">Formulario</Link></li>
                                        <li id="item-3"><button className='nav-link color-texto' onClick={redirect}>Cerrar Sesión</button ></li>
                                    </ul>
                                </li>



                                <li className="nav-item">
                                    <Link to="/colectivo-cuatro-react/carritp" className={url === "/colectivo-cuatro-react/carrito" ? "nav-active" : ""}><i
                                        className="fa-solid fa-cart-shopping"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>)

}



