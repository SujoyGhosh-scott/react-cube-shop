import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Details, Default, Navbar, ProductList, Modal } from "./Components";
import Cart from "./Components/Cart/Cart";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
