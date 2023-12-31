import React from "react";
import PropTypes from "prop-types";


function ProductCard({product}) {
    return (
            <div className="card-product" onClick={() => openModal(product)} id={product.id}>
                <img
                    src={product.images}
                    onError={()=>"this.onerror=null; this.src='./src/assets/images/products-images/img-product-404.jpg'"}
                    className="card-img-top"
                    alt="..."
                />
                <div className="card-product-body">
                    <div className="card-product-div">
                        <h5 className="card-product-title">
                            {product.name}
                        </h5>
                    </div>
                    <p className="card-product-description">
                        {product.descriptions}
                    </p>
                    <span className="card-product-price">
                        <small className="card-sign">$ </small>{product.price}.°°
                        <small className="card-currency"> mxn</small>
                    </span>
                    <i className="fa-solid fa-cart-plus fa-xl card-add-cart" />
                </div>
            </div>

    );
}

ProductCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string.isRequired,
    descriptions: PropTypes.string,
    price: PropTypes.number,
    images: PropTypes.string
};

export default ProductCard;

function openModal(product) {
    const sizeWidth = window.innerWidth;
    if (sizeWidth <= 480) { 
        var productModal = $('#productModal');
        productModal.find('.modal-title').text(`${product.name}`);
        productModal.find('.modal-description').text(`${product.descriptions}`);
        productModal.find('.modal-img').attr('src', product.images);
        productModal.find('.modal-img').attr('onerror', "this.onerror=null; this.src='./src/assets/images/products-images/img-product-404.jpg'");
        productModal.find('.modal-sign').text('$ ');
        productModal.find('.modal-price').text(`${product.price}.°°`);
        productModal.find('.modal-currency').text('mxn');
        productModal.modal('show');
    }
}