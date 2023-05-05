/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { useHistory } from "react-router";

import Dashboard from "../Dashboard";
import PostData from "../config/PostData";
import { userDataUpdater } from "../context/UserContext";
import UserForm from "./UserForm";

const NewUser = () => {
  const initialValue = {
    name: "",
    email: "",
    country: "",
    job: "",
    phone: "",
  };

  const history = useHistory();
  const [state, setState] = useState(initialValue);
  const contextFun = useContext(userDataUpdater);

  const submitForm = async (ev, stateValue) => {
    ev.preventDefault();
    const result = await PostData(stateValue);
    console.log(result);
    if (result.status === 201) {
      setState(initialValue);
      await contextFun();
      history.replace("/dashboard/all-users");
    } else {
      alert("error");
    }
  };
  return (
    <Dashboard>
      <div className="container-fluid p-0 mx-auto my-4 ">
        <div className="container-sm row m-auto ">
          <div className="card-header bg-dark text-secondary text-center text-capitalize">
            <h2>Create New User</h2>
          </div>
          <UserForm data={state} submitForm={submitForm} />
        </div>
      </div>
    </Dashboard>
  );
};

export default NewUser;