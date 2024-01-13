import React, { useState } from "react";
import data from "../json/Data.json";
import { Link } from "react-router-dom";

function Item() {
  const [searchQuery, setSearchQuery] = useState("");
  const filterData = searchQuery
    ? data.filter((food) => {
        return food.Name.includes(searchQuery);
      })
    : data;
  return (
    <div>
      <div className="mt-3 col-10 col-md-7 col-lg-5 border rounded-3 m-auto">
        <input
          type="search"
          className="form-control"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="row mt-5">
        {filterData.length === 0 ? (
          <h1 style={{height:"400px"}} className="d-flex justify-content-center align-items-center">Food Not Found!</h1>
        ) : (
          filterData.map((food, id) => (
            <div key={id} className="col-12 col-md-6 mb-4">
              <div className="card border-0 shadow-sm">
                <div className="d-flex align-items-center p-3">
                  <img
                    className="img-fluid rounded-circle me-3"
                    src={`/img/${food.Name}.jpg`}
                    alt={food.Name}
                    style={{ width: "105px", height: "105px" }}
                    onError={(e) => {
                      e.target.src = "/img/default.png";
                    }}
                  />
                  <div>
                    <Link
                      to={`/details/${food.Guid}`}
                      className="h5 mb-0 link-underline-dark link-offset-2"
                    >
                      {food.Name}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Item;
