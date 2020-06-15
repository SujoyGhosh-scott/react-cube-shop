import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <Link className="all-links" to="/">
          <div className="home">
            <img
              className="shop-logo"
              src="https://cdn4.vectorstock.com/i/1000x1000/13/88/rubik-logo-crypto-blockchain-cryptocurrency-vector-24171388.jpg"
              alt="shop-logo"
            />
            <h2>Cube Shop</h2>
            <ul>
              <li>Products</li>
            </ul>
          </div>
        </Link>
        <Link to="/cart">
          <button>cart</button>
        </Link>
      </div>
    );
  }
}

export default Navbar;
