import React from "react";
import { Link } from "react-router-dom";

function CartTotal({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className="cart-total">
      <div className="cart-clear">
        <Link to="/">
          <button onClick={() => clearCart()}>Clear Cart</button>
        </Link>
        <h4>sub total: $ {cartSubTotal}</h4>
        <h4>Tax: $ {cartTax}</h4>
        <h4>cart total: $ {cartTotal}</h4>
      </div>
    </div>
  );
}

export default CartTotal;
