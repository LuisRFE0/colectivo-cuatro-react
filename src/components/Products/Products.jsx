
import React from 'react';
import useScript from '../../assets/js/useScript';
import '../../assets/styles/productos.css';


export const Products = () => {
    useScript('./src/assets/js/ProductsController.js')
    useScript('./src/assets/js/productos.js')
    return (
        <main className="container">
            <section className="row">
                <div className="col-lg-12 mt-5">
                    <h1 className="text-center product-header">Elige tu diseño favorito</h1>
                    <div className="float-end filter mt-3">
                        <i className="fa-solid fa-filter fa-lg" /> Filtrar
                    </div>
                </div>
            </section>
            <section className="row products-container" ></section>
            {/* INICIO Y FIN DE CONTENEDOR DE LOS PRODUCTOS */}
            <section className="products" />
            {/* INICIO DE MODAL MODO RESPONSIVO */}
            <div
                className="modal fade"
                id="productModal"
                tabIndex={-1}
                aria-labelledby="productModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            />
                        </div>
                        <img
                            onerror="this.onerror=null; this.src='../images/products-images/img-product-404.jpg'"
                            className="modal-img mx-auto"
                        />
                        <div className="modal-body">
                            <div className="modal-title" />
                            <div className="modal-description" />
                            <span className="modal-sign" />
                            <span className="modal-price" />
                            <small className="modal-currency" />
                            <i className="fa-solid fa-cart-plus fa-xl modal-add-cart" />
                        </div>
                    </div>
                </div>
            </div>
            {/* FIN DE MODAL MODO RESPONSIVO */}
        </main>

    )
}
