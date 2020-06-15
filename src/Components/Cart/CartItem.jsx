import React from "react";

function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="cart-item">
      <img src={img} alt="" />
      <p>{title}</p>
      <p>{price}</p>
      <div>
        <button onClick={() => decrement(id)}>-</button>
        <span>{count}</span>
        <button onClick={() => increment(id)}>+</button>
      </div>
      <div className="remove-item">
        <button onClick={() => removeItem(id)}>remove</button>
      </div>
      <p>$ {total}</p>
    </div>
  );
}

export default CartItem;
