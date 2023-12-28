import React from 'react'
import { Link } from 'react-router-dom';


import "../../assets/styles/footer.css"
import facebook from '../../assets/images/icons/fb.png'
import insta from '../../assets/images/icons/insta.png'
import twitter from '../../assets/images/icons/x.png'
import youtube from '../../assets/images/icons/you.png'


export const Footer = () => {
    return (
        <footer className="linea-footer">
            <div className="container text-center footer-conteiner">
                <span id="footer-title"> #CreamosComunidad </span>
                <button id="footer-button">Suscríbete</button>
                <br />
                <div className="row enlaces">
                    <div className="col-5 enlaces-local col-sm-5 ">
                        <Link className="enlace-local" to="/colectivo-cuatro-react/nosotros">
                            Conócenos
                        </Link>
                        <Link className="enlace-local" to="/colectivo-cuatro-react/contacto">
                            Contacto
                        </Link>
                        <Link
                            className="enlace-local"
                            to="/colectivo-cuatro-react/politica-privacidad    "
                        >
                            Política de privacidad
                        </Link>
                    </div>
                    <div className="col-7 iconos-local col-sm-7">
                        <img
                            className="icon-local mx-3"
                            src={facebook}
                            alt=""
                        />
                        <img
                            className="icon-local mx-3"
                            src={insta}
                            alt=""
                        />
                        <img
                            className="icon-local mx-3"
                            src={twitter}
                            alt=""
                        />
                        <img
                            className="icon-local mx-3"
                            src={youtube}
                            alt=""
                        />
                    </div>
                </div>
                <br />
            </div>
            <span className='footer-copyright'>© 2023. JavaAdictos</span>
        </footer>
    )
}
