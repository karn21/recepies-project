import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Recepie extends Component {
  render() {
    const {
      id,
      title,
      readyInMinutes,
      servings,
      image,
      sourceName,
      sourceUrl,
      vegetarian,
    } = this.props.recepie;
    return (
      <div className="col-10 col-md-6 col-lg-4 mx-auto my-3">
        <div className="card my-3" style={{ height: "100%" }}>
          <img
            src={`${image}`}
            style={{ height: "14rem" }}
            alt=""
            className="img-card-top"
          />
          <div className="card-body text-capitalize">
            <h5>{title}</h5>
            <h6 className="text-warning text-slanted">
              provided by {sourceName}
            </h6>
            Ready in : {readyInMinutes} minutes
            <br /> servings : {servings}
            {vegetarian ? (
              <div className="badge badge-success float-right">Veg</div>
            ) : (
              <div className="badge badge-danger float-right">Non-Veg</div>
            )}
          </div>
          <div className="card-footer">
            <Link to={`/recepies/${id}`}>
              <div className="btn btn-primary">Details</div>
            </Link>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary mx-2 text-capitalize"
            >
              Recepie Url
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recepie;
