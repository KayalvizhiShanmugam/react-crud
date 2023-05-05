// eslint-disable-next-line no-unused-vars
import React from 'react';

import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import GetUsers from "./pages/GetUsers";
import NewUser from "./pages/NewUser";
import UserProfile from "./pages/UserProfile";
import EditUserProfile from "./pages/EditUserProfile";
import HomePage from "./HomePage";
import Data from "./config/DataFetch";

import UserContext from "./context/UserContext";

function App() {
  return (
    <>
      <UserContext>
        <Switch>
          <Route path="/dashboard/all-users">
            <GetUsers />
          </Route>
          <Route path="/dashboard/create-user">
            <NewUser />
          </Route>
          <Route path="/dashboard/view-profile/:id">
            <UserProfile />
          </Route>
          <Route path="/dashboard/editProfile/:id">
            <EditUserProfile />
          </Route>
          <Route path="/dashboard">
            <HomePage />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
          <Route path="/">
            <Redirect to="/dashboard"></Redirect>
          </Route>
        </Switch>
      </UserContext>
    </>
  );
}

export default App;