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
    initial_url: `https://api.spoonacular.com/recipes/random?number=30&apiKey=${process.env.REACT_APP_API_KEY}`,
    baseUrl: "",
    loading: true,
    error: "",
  };

  async getRecepies() {
    this.setState({
      loading: true,
    });
    try {
      const response = await fetch(this.state.url);
      const responseData = await response.json();
      console.log(responseData);
      this.setState({
        recepies: responseData.recipes,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getSearchRecepies() {
    this.setState({
      loading: true,
    });
    try {
      const response = await fetch(this.state.url);
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.results.length === 0) {
        this.setState({
          error: "Sorry your search did not return any result!!!",
          loading: false,
        });
      } else {
        this.setState({
          recepies: responseData.results,
          loading: false,
          baseUrl: responseData.baseUri,
          error: "",
        });
      }
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
    const search_url = `https://api.spoonacular.com/recipes/search?query=${this.state.search}&number=30&apiKey=${process.env.REACT_APP_API_KEY}`;
    this.setState(
      {
        url: search_url,
        search: "",
      },
      () => this.getSearchRecepies()
    );
  };

  handleRefresh = () => {
    this.setState(
      {
        url: this.state.initial_url,
        baseUrl: "",
        error: "",
      },
      () => this.getRecepies()
    );
  };

  render() {
    return (
      <>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></Search>
        {this.state.baseUrl && (
          <div className="row">
            <div className="col-sm-10 col-md-6 mx-auto text-center">
              <button
                className="btn btn-warning btn-lg"
                onClick={this.handleRefresh}
              >
                Get Popular Recepies
              </button>
            </div>
          </div>
        )}

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
        ) : this.state.error ? (
          <div className="row">
            <div className="col">
              <h2 className="text-center text-uppercase mt-4 text-orange">
                {this.state.error}
              </h2>
            </div>
          </div>
        ) : (
          <RecepieList
            recepies={this.state.recepies}
            baseUrl={this.state.baseUrl}
          ></RecepieList>
        )}
      </>
    );
  }
}

export default Recepies;
