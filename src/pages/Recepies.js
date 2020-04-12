import React, { Component } from "react";
import Search from "../components/Search";
import RecepieList from "../components/RecepieList";

export class Recepies extends Component {
  constructor(props) {
    super(props);
    this.getRecepies = this.getRecepies.bind(this);
  }

  state = {
    recepies: {},
    search: "",
    url: `https://api.spoonacular.com/recipes/random?number=30&apiKey=${process.env.REACT_APP_API_KEY}`,
    loading: true,
  };

  async getRecepies() {
    try {
      const response = await fetch(this.state.url);
      const responseData = await response.json();
      this.setState({
        recepies: responseData.recipes,
        loading: false,
      });
      console.log(responseData);
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecepies();
  }

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

        {this.state.loading ? (
          <div className="container">
            <div className="row">
              <div className="col-10 mx-auto col-md-6 text-center mt-3">
                <h3 className="text-orange text-slanted text-uppercase">
                  Loading Receipies ...
                </h3>
              </div>
            </div>
          </div>
        ) : (
          <RecepieList
            recepies={this.state.recepies}
            baseUrl={this.state.baseUrl}
          ></RecepieList>
        )}

        {/* {!this.state.loading && (
          
        )} */}
      </>
    );
  }
}

export default Recepies;
