import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return (
      <Header title="Awesome Recepies" styleClass="header-hero ">
        <Link to="/recepies">
          <button className="btn btn-secondary btn-lg mt-3">
            Search Recepies
          </button>
        </Link>
      </Header>
    );
  }
}

export default Home;
