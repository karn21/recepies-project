import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export class Default extends Component {
  render() {
    return (
      <Header title="404 not found">
        <h2 className="text-light text-capitalize my-5">
          OOps! You are lost ....
        </h2>
        <Link to="/">
          <div className="btn btn-secondary btn-lg">Return to Home</div>
        </Link>
      </Header>
    );
  }
}

export default Default;
