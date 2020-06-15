import React from "react";

class CartColumns extends React.Component {
  render() {
    return (
      <div className="cart-columns">
        <p>products</p>
        <p>name of product</p>
        <p>price</p>
        <p>quantity</p>
        <p>remove</p>
        <p>total</p>
      </div>
    );
  }
}

export default CartColumns;
