import React, { Component } from "react";
import Recepie from "./Recepie";

export class RecepieList extends Component {
  render() {
    const { recepies, baseUrl } = this.props;

    return (
      <>
        {" "}
        <div className="container">
          <div className="row py-5">
            <div className="col-10 col-md-6 mx-auto text-center">
              <h1 className="text-slanted text-uppercase">Popular Recepies</h1>
            </div>
          </div>
          <div className="row">
            {recepies.map((recepie) => (
              <Recepie
                key={recepie.id}
                recepie={recepie}
                baseUrl={baseUrl}
              ></Recepie>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default RecepieList;
