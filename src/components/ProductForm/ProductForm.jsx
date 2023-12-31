
import '../../assets/styles/formProduct.css';
export const ProductForm = () => {




    return (
        <>

            <main className=" text  container-fluid">
                <h1 className="text-center mt-5 titulo-admin">Bienvenido administrador</h1>
                <section className="buscar row  mt-5 d-flex justify-content-center align-items-center">
                    <div className="col-sm-12 col-md-4  largo-div">
                        <label className="col-md-12 text-center" htmlFor="">
                            Buscar producto por ID:
                        </label>
                        <input
                            className="col-md-12 form-control "
                            type=" text"
                            id="input-buscar"
                            placeholder="ID"
                        />
                    </div>
                    <div className="mt-5 row options">
                        <button
                            type="button"
                            id="btn-gets-product"
                            className="mx-5 my-2 col-sm-12 col-md-6  btn-view-local border-radius-local no-borde largo"
                        >
                            Obtener producto
                        </button>
                        <button
                            type="button"
                            className="mx-6 my-2 col-sm-12 col-md-6  btn-warning-local border-radius-local no-borde largo"
                            id="btn-delete-product"
                        >
                            Eliminar Productos
                        </button>
                    </div>
                </section>
                <br />
                <br />
                <div className="alerta-find text-center mx-auto " style={{ width: 300 }}>
                    {" "}
                </div>
                <br />
                <br />
                <section className=" container form-product ">
                    <form action=" #">
                        <div className="row mb-3  d-flex justify-content-center align-items-center ">
                            <label htmlFor="input-id" className="col-sm-2 col-form-label id-hidden">
                                ID:
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control id-hidden"
                                    id="input-id"
                                    disabled=""
                                    placeholder="ID"
                                />
                            </div>
                        </div>
                        {/* ********************************************** */}
                        <div className="row mb-3  d-flex justify-content-center align-items-center ">
                            <label htmlFor="input-product" className="col-sm-2 col-form-label">
                                Producto:
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="input-product"
                                    placeholder=" Nombre de producto"
                                />
                            </div>
                        </div>
                        {/* ********************************************** */}
                        <div className="row mb-3  d-flex justify-content-center align-items-center">
                            <label className="col-sm-2 col-form-label" htmlFor="">
                                Cantidad del producto:
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="number"
                                    className="form-control"
                                    id="input-stock"
                                    placeholder={10}
                                />
                                <br />
                            </div>
                        </div>
                        {/* ********************************************** */}
                        <div className="row mb-3  d-flex justify-content-center align-items-center">
                            <label className="col-sm-2 col-form-label" htmlFor="">
                                Imagen del producto:
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="input-image"
                                    placeholder="Playera"
                                />
                                <br />
                            </div>
                        </div>
                        {/* ********************************************** */}
                        <div className="row mb-3  d-flex justify-content-center align-items-center">
                            <label className="col-sm-2 col-form-label" htmlFor="input-price">
                                Precio del producto:
                            </label>
                            <div className="col-sm-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="input-price"
                                    placeholder="Precio"
                                />
                                <br />
                            </div>
                        </div>
                        {/* ********************************************** */}
                        <div className="row mb-3  d-flex justify-content-center align-items-center">
                            <label className="col-sm-2 col-form-label" htmlFor="">
                                Descripción del producto:
                            </label>
                            <div className="col-sm-6">
                                <textarea
                                    className="form-control"
                                    name=""
                                    id="input-description"
                                    cols={15}
                                    rows={5}
                                    placeholder="Descripción"
                                    defaultValue={""}
                                />
                            </div>
                        </div>
                    </form>
                    <div className="mensaje-alerta mt-5 text-center d-flex justify-content-center align-items-center "></div>
                </section>
                <div className="mt-5 row options">
                    <button
                        type="button"
                        id="btn-create"
                        className="mx-5 my-2 col-sm-12 col-md-6  btn-view-local border-radius-local no-borde largo"
                    >
                        Cargar Productos
                    </button>
                    <button
                        type="button"
                        id="btn-update"
                        className="mx-6 my-2 col-sm-12 col-md-6  btn-warning-local border-radius-local no-borde largo"
                    >
                        Actualizar Productos
                    </button>
                </div>
                <br />
            </main>

        </>

    )
}
