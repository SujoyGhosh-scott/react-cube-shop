import React from "react";

class Default extends React.Component {
  render() {
    return (
      <div className="default">
        <h1>404</h1>
        <h4>error</h4>
        <h3>Page not found</h3>
        <h4>
          the requested URL{" "}
          <span className="url">
            <b>{this.props.location.pathname}</b>{" "}
          </span>{" "}
          was not found
        </h4>
      </div>
    );
  }
}

export default Default;
