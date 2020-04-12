import React, { Component } from "react";
import { recipeData } from "../data/tempDetails";
import { Link } from "react-router-dom";

export class SingleRecepie extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;

    this.state = {
      recepie: recipeData,
      id,
      loading: false,
    };
  }

  componentDidMount() {
    document.getElementById("sum").innerHTML = this.state.recepie.summary;
  }

  render() {
    const {
      image,
      title,
      sourceName,
      sourceUrl,
      spoonacularSourceUrl,
      extendedIngredients,
      analyzedInstructions,
    } = this.state.recepie;
    console.log(analyzedInstructions[0].steps);
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row my-5">
            <div className="col-10 col-md-6 mx-auto">
              <h2 className="text-uppercase text-orange text-center">
                Loading Recepie...
              </h2>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto my-3">
            <Link to="/" className="btn btn-warning text-capitalize mb-5">
              Back to Recepies
            </Link>
            <img
              src={image}
              className="d-block w-100"
              style={{ maxHeight: "30rem" }}
              alt="recepie"
            />
            <div className="mt-3" id="sum"></div>
          </div>
          <div className="col-10 col-md-6 mx-auto my-3">
            <h2 className="text-uppercase">{title}</h2>
            <h5 className="text-warning text-capitalize">
              provided by {sourceName}
            </h5>
            <a
              href={sourceUrl}
              className="btn btn-primary text-capitalize mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              publisher webpage
            </a>
            <a
              href={spoonacularSourceUrl}
              className="btn btn-success text-capitalize mt-2 mx-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              recepie url
            </a>
            <ul className="list-group mt-4">
              <h5 className="mt-3 mb-4">Ingredients</h5>
              {extendedIngredients.map((ingredient) => (
                <li className="list-group-item" key={ingredient.id}>
                  {ingredient.originalString}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-10 col-md-10 mx-auto">
            <h3 className="text-center text-uppercase my-4 text-slanted">
              Instructions
            </h3>
            <table className="table table-striped">
              <tbody>
                <tr>
                  <th>#</th>
                  <th className="text-center">What to do</th>
                </tr>
                {analyzedInstructions[0].steps.map((inst) => (
                  <tr key={inst.number}>
                    <td>{inst.number}</td>
                    <td>{inst.step}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleRecepie;
