import React from "react";

function Search(props) {
  const { handleChange, handleSubmit, search } = props;

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-10 col-md-8 mx-auto text-center">
          <h1 className="text-slanted text-capitalize mt-5 mb-3">
            Search Recepies with <span className="text-orange">Food2Fork</span>
          </h1>
          <form onSubmit={handleSubmit} className="my-4">
            <label className="text-capitalize mb-3" htmlFor="search">
              Type recepies seperated by commas
            </label>
            <div className="input-group">
              <input
                name="search"
                type="text"
                className="form-control"
                placeholder="carrots,onions,tomatoes"
                onChange={handleChange}
                value={search}
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-primary text-white">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
