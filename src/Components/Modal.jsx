import React from "react";
import { ProductConsumer } from "../ContextApi";
import { Link } from "react-router-dom";

class Modal extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(val) => {
          const { modalOpen, closeModal } = val;
          const { img, title, price } = val.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div id="modal" className="modal">
                <div className="modal-container">
                  <h3>item added to the cart</h3>
                  <img src={img} alt="" />
                  <h4>{title}</h4>
                  <h3>$ {price}</h3>
                  <div className="buttons">
                    <Link to="/" onClick={() => closeModal()}>
                      <button>back</button>
                    </Link>
                    <Link to="/cart" onClick={() => closeModal()}>
                      <button>go to cart</button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Modal;
