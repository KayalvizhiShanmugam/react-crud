/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const UserForm = ({ data, submitForm }) => {
  const [state, setState] = useState(data);
  console.log(state, "state from userForm");
  function handleChange(ev) {
    console.log(ev.target.value);
    const { name, value } = ev.target;
    setState((prev) => ({ ...prev, [name]: value }));
  }
  return (
    <>
      <div className="col bg-warning shadow-lg">
        <form className="my-3">
          <div className="col col-md-6 mb-3 mx-auto">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className=" form-control"
              id="name"
              name="name"
              value={state.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col col-md-6 mb-3 mx-auto">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className=" form-control"
              id="email"
              name="email"
              value={state.email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col col-md-6 mb-3 mx-auto">
            <label htmlFor="Country">Country</label>
            <input
              type="text"
              className=" form-control"
              id="Country"
              name="country"
              value={state.country}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col col-md-6 mb-3 mx-auto">
            <label htmlFor="JobTitle">JobTitle</label>
            <input
              type="text"
              className=" form-control"
              id="JobTitle"
              name="job"
              value={state.job}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col col-md-6 mb-3 mx-auto">
            <label htmlFor="PhoneNo">PhoneNo</label>
            <input
              type="text"
              className=" form-control"
              id="PhoneNo"
              name="phone"
              value={state.phone}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col col-md-6 mb-3 mx-auto">
            <button
              className="btn-outline-danger"
              onClick={(e) => submitForm(e, state)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserForm;