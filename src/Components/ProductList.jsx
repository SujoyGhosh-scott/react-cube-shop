import React from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../ContextApi";

class ProductList extends React.Component {
  render() {
    return (
      <div>
        <Title name="our" title="Products" />
        <div className="product-list">
          <ProductConsumer>
            {(val) => {
              return val.products.map((product) => {
                return <Product key={product.id} product={product} />;
              });
            }}
          </ProductConsumer>
        </div>
      </div>
    );
  }
}

export default ProductList;
