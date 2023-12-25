import React from 'react'
import img_carousel_1 from '../../assets/images/home/img-carousel-1.jpg'
import img_carousel_2 from '../../assets/images/home/img-carousel-2.jpg'
import img_carousel_3 from '../../assets/images/home/img-carousel-3.jpg'
import img_index_welcome from '../../assets/images/home/img-index-welcome.jpg'
import banner from '../../assets/images/home/banner1.png'
import img_tag from '../../assets/images/home/img-tag.png'

export const Index = () => {
    return (
        <main>
            <section className="d-flex justify-content-center align-items-center">
                <div id="carouselExampleCaptions" className="carousel slide carousel-local">
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src={img_carousel_1}
                                className="d-block w-100 img-carousel"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h4>Un mundo de emociones mediante cada costura</h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={img_carousel_2}
                                className="d-block w-100 img-carousel"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h4
                                    style={{
                                        color: "var(--rosa)",
                                        fontWeight: 700,
                                        WebkitTextStroke: "0.3px var(--azul)"
                                    }}
                                >
                                    Viste con estilo, ¡compra aquí tu look ideal!
                                </h4>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img
                                src={img_carousel_3}
                                className="d-block w-100 img-carousel"
                                alt="..."
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h4 style={{ color: "var(--azul)", fontWeight: 700 }}>
                                    La moda que te hace sentir especial
                                </h4>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section className="container ">
                <div className="row " style={{ margin: "0 auto" }}>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <img
                            className="img-index-welcome "
                            src={img_index_welcome}
                            alt=""
                        />
                    </div>
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <p className="index-texto-welcome">
                            Bienvenido a Colectivo Cuatro, la tienda de ropa que te ofrece las
                            últimas tendencias y la mejor calidad. En Colectivo Cuatro encontrarás
                            todo lo que necesitas para vestirte con estilo y sentirte bien en
                            cualquier ocasión. En Colectivo Cuatro nos preocupamos por la
                            satisfacción de nuestrxs clientes, por eso ofrecemos un servicio de
                            atención al cliente personalizado, un sistema de envío rápido y
                            seguro, y una política de devolución y cambio fácil y sin
                            complicaciones.
                        </p>
                    </div>
                    <div className="col-lg-8 text-center mx-auto index-text-welcome2">
                        Queremos que te sientas cómodx, feliz y segurx con tu compra. Estamos
                        seguros de que te encantará nuestra colección y que querrás volver a
                        comprar con nosotros. No esperes más y entra en el mundo de Colectivo
                        Cuatro, la tienda que te hará sentir únicx y especial.
                    </div>
                    <div className="col-lg-12 d-flex justify-content-center align-items-center my-3">
                        <img className="img-foot" src={img_tag} alt="" />
                    </div>
                    <div className="col-lg-8 text-center mx-auto index-text-welcome2-mobile">
                        Queremos que te sientas cómodx, feliz y segurx con tu compra. Estamos
                        seguros de que te encantará nuestra colección y que querrás volver a
                        comprar con nosotros. No esperes más y entra en el mundo de Colectivo
                        Cuatro, la tienda que te hará sentir únicx y especial.
                    </div>
                </div>
            </section>
        </main>

    )
}
