import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home/Home";
import Friends from "./pages/Friends/Friends";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/home"} exact={true} element={<Home></Home>}></Route>
        <Route path={"/friends"} exact={true} element={<Friends></Friends>}></Route>
        <Route path={"/login"} exact={true} element={<Login></Login>}></Route>
        <Route path={"/register"} exact={true} element={<Register></Register>}></Route>
        {/* <Route
          path={routes.app.path}
          exact={true}
          element={
            <ProtectedRoute path={routes.login.path}>
              <Home />
            </ProtectedRoute>
          }
        ></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
