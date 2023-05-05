/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import Dashboard from "../Dashboard";
import { Link } from "react-router-dom";
import { userData } from "../context/UserContext";

const GetUsers = () => {
  const [data, setData] = useState([]);

  const value = useContext(userData);

  useEffect(() => {
    setData(value);
  }, [value]);

  return (
    <Dashboard>
      <div className="container-fluid p-0 p-md-auto m-0 m-md-auto">
        <div className="container-sm row w-auto m-md-auto mx-1 p-1 p-md-auto justify-content-center ">
          {/* {data ? data.map((d, i) => <li key={i}>{d.name}</li>) : "loading..."} */}
          {data
            ? data.map((d) => (
                <div className="col m-md-2 p-md-2 py-sm-2 py-2" key={d.id}>
                  <Link to={`/dashboard/view-profile/${d.id}`}>
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        src={d.avatar}
                        alt={d.name}
                        className="card-img-top  img-thumbnail"
                        width="40px"
                        height="75px"
                      />

                      <div className=" card-body">
                        <div className="card-title">{d.name}</div>
                        <div className="card-subtitle">{d.email}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))
            : "loading..."}
        </div>
      </div>
    </Dashboard>
  );
};

export default GetUsers;