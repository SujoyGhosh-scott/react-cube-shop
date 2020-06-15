import React from "react";
import { ProductConsumer } from "../ContextApi";
import { Link } from "react-router-dom";

class Details extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(val) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = val.detailProduct;
          return (
            <div className="details">
              <h1 style={{ textAlign: "center" }}>{title}</h1>
              <div className="Dproduct">
                <img src={img} alt="" />
                <div className="other-info">
                  <h3>made by: {company}</h3>
                  <h4>price: $ {price}</h4>
                  <p>
                    <b>info: </b>
                    {info}
                  </p>
                  <div className="buttons">
                    <Link to="/">
                      <button>Back</button>
                    </Link>
                    <button
                      disabled={inCart ? true : false}
                      onClick={() => {
                        val.addToCart(id);
                        val.openModal(id);
                      }}
                    >
                      {inCart ? "added" : "add"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Details;
