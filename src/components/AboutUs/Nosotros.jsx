import '../../assets/styles/nosotros.css';
import chino from '../../assets/images/profile-images/foto-chino.jpeg'
import nalle from '../../assets/images/profile-images/foto-nallely.jpg'
import vic from '../../assets/images/profile-images/foto-victor.jpg'
import cinthia from '../../assets/images/profile-images/foto-cintia.jpeg'
import fer from '../../assets/images/profile-images/foto-maro.jpeg'
import lili from '../../assets/images/profile-images/foto-lili.jpeg'



export const Nosotros = () => {
    return (
        <>

            <section className="container">
                <h1 className="text-center mt-5">¿Quiénes somos?</h1>
                <p className="px-1 text-center">Colectivo Cuatro nació de la visión compartida de un grupo apasionado de
                    diseñadores
                    y
                    amantes de la moda que buscaban resaltar la diversidad y diseños creativos minimalistas. Desde nuestros
                    inicios, nos hemos dedicado a colaborar con talentosos diseñadores locales para crear colecciones que
                    fusionan la herencia creatividad con las tendencias minimalistas.</p>
            </section>

            <section className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-center">Misión</h2>
                        <p className="px-1 text-center">En Colectivo Cuatro, nos dedicamos a proporcionar a nuestros clientes
                            una
                            experiencia de compra
                            de moda
                            en línea excepcional y única. Nos esforzamos por ser más que una simple tienda de ropa; somos un
                            destino
                            de moda donde la creatividad, la calidad y la diversidad se encuentran. Nuestra misión es
                            ofrecer a
                            nuestros clientes las últimas tendencias en moda, fusionando estilo y comodidad en cada prenda
                            que
                            vendemos.</p>
                    </div>
                    <div className="col-md-6">
                        <h2 className="text-center">Visión</h2>
                        <p className="px-1 text-center">Nuestra visión es crear un universo digital donde la moda se fusiona
                            con la
                            creatividad y la autenticidad. Imaginamos un mundo donde cada cliente pueda descubrir y expresar
                            su
                            estilo único a través de nuestra amplia gama de productos cuidadosamente seleccionados. En
                            Colectivo
                            Cuatro, aspiramos a ser pioneros en la integración de tecnología avanzada y diseño de
                            vanguardia,
                            ofreciendo una experiencia de compra intuitiva y personalizada que se adapte a las preferencias
                            de
                            cada individuo.</p>
                    </div>
                </div>
            </section>


            <section className="container mt-4">
                <div className="row">
                    <div className="card-col col-lg-4 col-sm-6 d-flex justify-content-center align-items-center mt-5">
                        <div className="card card-local">
                            <img src={chino}
                                className="card-img img-round-local mx-auto rounded-circle" alt="..." />
                            <div className="card-body">
                                <h4 className="title text-center">Luis Flores </h4>
                                <p className="card-text text-center career">
                                    Ingeniero en sistemas | Desarrollador Fullstack Java y Php
                                </p>
                                <p className="card-text text-center strenghts">
                                    Trabajo en equipo, comunicación y amor por el aprendizaje
                                    <br />
                                    <span className=" scrum-role">Desarrollador</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-col col-lg-4 col-sm-6 d-flex justify-content-center align-items-center mt-5">
                        <div className="card card-local">
                            <img src={nalle}
                                className="card-img img-round-local mx-auto rounded-circle" alt="..." />
                            <div className="card-body">
                                <h4 className="title text-center">Nallely Sifuentes </h4>
                                <p className="card-text text-center career">
                                    Licenciada en Psicología | Desarrolladora Fullstack
                                </p>
                                <p className="card-text text-center">
                                    Curiosa y en constante aprendizaje.
                                    <br /><br />
                                    <span className=" scrum-role">Desarrolladora y Scrum Master</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-col col-lg-4 col-sm-6 d-flex justify-content-center align-items-center mt-5">
                        <div className="card card-local">
                            <img src={vic}
                                className="card-img img-round-local mx-auto rounded-circle" alt="..." />
                            <div className="card-body">
                                <h4 className="title text-center">Víctor Moysén</h4>
                                <p className="card-text text-center career">
                                    Ingeniero en Computación | Desarrollador Java Fullstack
                                </p>
                                <p className="card-text text-center">
                                    Persitente, autodidacta y organizado.
                                    <br /><br />
                                    <span className=" scrum-role">Desarrollador</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-col col-lg-4 col-sm-6 d-flex justify-content-center align-items-center mt-5">
                        <div className="card card-local">
                            <img src={cinthia}
                                className="card-img img-round-local mx-auto rounded-circle" alt="..." />
                            <div className="card-body">
                                <h4 className="title text-center">Cinthia Cardos </h4>
                                <p className="card-text text-center career">
                                    Ingeniera Electromecanica | Desarrolladora Java Fullstack
                                </p>
                                <p className="card-text text-center">
                                    Trabajo en equipo, autodidacta y amor por el aprendizaje.
                                    <br /><br />
                                    <span className=" scrum-role">Desarrolladora y Scrum Master</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-col col-lg-4 col-sm-6 d-flex justify-content-center align-items-center mt-5">
                        <div className="card card-local">
                            <img src={fer}
                                className="card-img img-round-local mx-auto rounded-circle" alt="..." />
                            <div className="card-body">
                                <h4 className="title text-center">Fernanda Martínez </h4>
                                <p className="card-text text-center career">
                                    Licenciada en Diseño | Desarrolladora Java Fullstack
                                </p>
                                <p className="card-text text-center">
                                    Comunicación, autodidacta y resiliente.
                                    <br /><br />
                                    <span className=" scrum-role">Desarrolladora y Product Owner</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card-col col-lg-4 col-sm-6 d-flex justify-content-center align-items-center mt-5">
                        <div className="card card-local">
                            <img src={lili}
                                className="card-img img-round-local mx-auto rounded-circle" alt="..." />
                            <div className="card-body">
                                <h4 className="title text-center">Liliana Orozco </h4>
                                <p className="card-text text-center career">
                                    Licenciada en Relaciones Internacionales | Analista y Developer
                                </p>
                                <p className="card-text text-center">
                                    Liderazgo, adaptabilidad y responsable.
                                    <br /><br />
                                    <span className=" scrum-role">Desarrolladora y Scrum Master</span>
                                </p>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


        </>
    )
}