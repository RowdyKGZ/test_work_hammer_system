import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LeftSideBar from "./components/LeftSideBar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import UserList from "./pages/UserList";

const Routes = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <LeftSideBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/User-List" component={UserList} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
