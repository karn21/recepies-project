import React, { Component } from "react";
import Search from "../components/Search";
import RecepieList from "../components/RecepieList";
import { recepieData } from "../data/tempList";

export class Recepies extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    recepies: recepieData,
    search: "",
  };

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></Search>
        <RecepieList recepies={this.state.recepies}></RecepieList>
      </>
    );
  }
}

export default Recepies;
