import React from 'react'
import "../../assets/styles/contacto.css"
import logo_carita from "../../assets/images/home/logo-carita.png"

export const Contact = () => {
    return (
        <section className="row text-center mt-5">
            <div className="col-lg-12 mb-3">
                <h1 id="contact-header">Contáctanos</h1>
            </div>
            <div className="col-lg-6" id="info-container">
                <h4 id="info-header">Información de contacto</h4>
                <img src={logo_carita} id="logo-contacto" />
                <p id="info-description" className="mt-2">
                    <strong>Envíos y entregas en todo CDMX</strong>
                </p>
            </div>
            <div
                className="col-lg-6 col-sm-12 "
                id="form-container"
                style={{ margin: "0 auto" }}
            >
                <form
                    id="form"
                    className="row g-3 mr-3 d-flex justify-content-center align-items-center"
                >
                    <div className="col-md-8 col-sm-12 mx-auto">
                        <label
                            htmlFor="inputEmail4"
                            className="form-label justify-content-start d-flex "
                        >
                            {" "}
                            Nombre
                        </label>
                        <input type="text" className="form-control" id="inputNombre4" />
                    </div>
                    <div className="col-md-8">
                        <label
                            htmlFor="inputEmail4"
                            className="form-label justify-content-start d-flex"
                        >
                            Email
                        </label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-8">
                        <label
                            htmlFor="inputEmail4"
                            className="form-label justify-content-start d-flex"
                        >
                            Teléfono
                        </label>
                        <input type="text" className="form-control" id="inputTelefono4" />
                    </div>
                    <div className="col-md-8">
                        <label
                            htmlFor="inputEmail4"
                            className="form-label justify-content-start d-flex"
                        >
                            Mensaje
                        </label>
                        <textarea
                            className="form-control"
                            id="inpuntTextArea4"
                            cols={25}
                            rows={5}
                            defaultValue={""}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn-contacto">
                            Enviar
                        </button>
                    </div>
                    <div id="alerta" className="col-md-8" />
                    <br />
                    <br />
                    <br />
                </form>
            </div>
        </section>

    )
}
