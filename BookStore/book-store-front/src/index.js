import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import BookItem from "./components/BookItem";
import NotFound from "./components/NotFound";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} exact={true} element={<App></App>}></Route>
        <Route path={"/book"} exact={true} element={<BookItem></BookItem>}></Route>
        <Route path={"/book/:id"} exact={true} element={<BookItem></BookItem>}></Route>
        <Route path={"*"} exact={true} element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
