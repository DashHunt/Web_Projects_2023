import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  withRouter,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import App from "./pages/App/App";
import Home from "./pages/home/Home";
import {RouteWrapper} from "./helpers/wrapper/Wrapper";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path={"/teste/"}
          exact={true}
          element={
            <RouteWrapper>
              <App></App>
            </RouteWrapper>
          }
        ></Route>
        <Route
          path={"teste/home"}
          exact={true}
          element={
            <RouteWrapper>
              <Home></Home>
            </RouteWrapper>
          }
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
