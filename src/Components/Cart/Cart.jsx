import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./emptyCart";
import { ProductConsumer } from "../../ContextApi";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

class Cart extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(val) => {
          const { cart } = val;
          if (cart.length > 0) {
            return (
              <div>
                <Title name="Your" title="Cart" />
                <CartColumns />
                <CartList value={val} />
                <CartTotal value={val} />
              </div>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
    );
  }
}

export default Cart;
