import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../ContextApi";
import PropTypes from "prop-types";

class Product extends React.Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="product">
        <ProductConsumer>
          {(value) => (
            <div
              className="img-container"
              onClick={() => value.handelDetail(id)}
            >
              <Link to="/details">
                <img src={img} alt="" />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openModal(id);
                }}
              >
                {inCart ? "added" : "add"}
              </button>
            </div>
          )}
        </ProductConsumer>

        <div className="basic-info">
          <h3>{title}</h3>
          <p>$ {price}</p>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
