/* eslint-disable no-unused-vars */
import React, { useState, useContext } from "react";
import { useParams, useHistory } from "react-router";

import Dashboard from "../Dashboard";
import UserForm from "./UserForm";

import FilterUser from "../context/FilterUser";
import EditData from "../config/EditData";
import { userDataUpdater } from "../context/UserContext";

const EditUserProfile = () => {
  const [state, setState] = useState(null);

  const contextFunc = useContext(userDataUpdater);
  const params = useParams();
  const userId = params.id;
  const history = useHistory();

  const getUser = async () => {
    const userData = await FilterUser(userId);
    setState(userData);
  };
  getUser();

  if (!state) {
    return <div>Loading.....</div>;
  }

  const submitFormAfterEdit = async (ev, stateValue) => {
    ev.preventDefault();
    console.log(stateValue, "stateValue from edituser");
    const response = await EditData(userId, stateValue);
    if (response === 200) {
      contextFunc();
      console.log(response);
      // history.push(`dashboard/view-profile/${userId}`);
      history.replace("/dashboard/all-users");
    }
  };

  return (
    <Dashboard>
      <h2>Edit UserProfile ID: {params.id}</h2>
      <div className="container-fluid p-0 mx-auto my-4 ">
        <div className="container-sm row m-auto ">
          <div className="card-header bg-dark text-secondary text-center text-capitalize">
            <h2>Edit userValue</h2>
          </div>
          <UserForm data={state[0]} submitForm={submitFormAfterEdit} />
        </div>
      </div>
    </Dashboard>
  );
};

export default EditUserProfile;