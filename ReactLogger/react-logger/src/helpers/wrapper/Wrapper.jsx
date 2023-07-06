
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import JWTService from "../../data/JWT.service";
import handleError  from "../handlers/handleError";

import Spinner from 'react-bootstrap/Spinner';
import { SiAdblock } from "react-icons/si";

// @ PackageInfo:         Package comes with Component Wrapper
// @ Description:         Component Wrapper responsible for checking JWT Token and Logging important information
// @ Possible returns:    A auth spinner
// @ Possible returns:    A blocked page
// @ Possible returns:    Children component
// @ Usage:               In your routes/index file, wrap your component with this and have fun :D 

// Example:

//    <BrowserRouter>
//      <Routes>
//        <Route
//          path={"/your_path"}
//          element={
//            <Wrapper>
//              <MyComponent></MyComponent>
//            </Wrapper>
//          }
//        ></Route>
//      </Routes>
//    </BrowserRouter>

export const RouteWrapper = (props) => {
  const jwt = new JWTService();
  const [loginInfo, setLoginInfo] = useState({
    authenticated: false,
    loadingAuthentication: true,
    message: "Initial State",
  });

  const location = useLocation();
  const url = new URL(document.location.href);

  function handleClick(event) {
    if (event.target.type == "submit") {
      console.log({
        message: "Submit button pressed",
        type: "Submit",
        location: location.pathname,
        application: url.pathname.split("/")[1],
        user:
          sessionStorage.getItem("user") !== undefined
            ? sessionStorage.getItem("user")
            : null,
      });
    }
  }

  useEffect(() => {
    console.log({
      message: "Route changed",
      type: "Route",
      location: location.pathname,
      application: url.pathname.split("/")[1],
      user:
        sessionStorage.getItem("user") !== undefined
          ? sessionStorage.getItem("user")
          : null,
    });
  }, [props.children]);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const JWT = async () => {
      try {
        await jwt.getToken(process.env.REACT_APP_X_TESTER);
        setLoginInfo({
          authenticated: true,
          loadingAuthentication: false,
          message: "Authenticated successfully",
        });
      } catch (error) {
        handleError(error);
        setLoginInfo({
          authenticated: false,
          loadingAuthentication: false,
          message: "User not found",
        });
      }
    };

    const token = sessionStorage.getItem("access_token");
    const expiration = decodeTokenExpiration(token);
    const currentTime = Math.floor(Date.now() / 1000);

    if (expiration && currentTime >= expiration) {
      JWT();
    } else {
      setLoginInfo({
        authenticated: true,
        loadingAuthentication: false,
        message: "Authenticated successfully",
      });
    }
  }, []);

  const refreshAccessToken = async () => {
    try {
      await jwt.refreshToken(
        process.env.REACT_APP_X_TESTER,
        sessionStorage.getItem("refreshToken")
      );
      setLoginInfo({
        authenticated: true,
        loadingAuthentication: false,
        message: "Authenticated successfully",
      });
    } catch (error) {
      handleError(error)
      setLoginInfo({
        authenticated: false,
        loadingAuthentication: false,
        message: "Could not refresh token correctly",
      });
    }
  };

  const checkTokenExpiration = () => {
    const token = sessionStorage.getItem("access_token");
    const expiration = decodeTokenExpiration(token);
    const currentTime = Math.floor(Date.now() / 1000);

    if (expiration && currentTime >= expiration) {
      refreshAccessToken();
    }
  };

  const decodeTokenExpiration = (token) => {
    if (!token) {
      return null;
    }

    try {
      const [, payloadBase64] = token.split(".");
      const payload = JSON.parse(atob(payloadBase64));
      const { exp } = payload;
      return exp;
    } catch (error) {
      handleError(error)
      console.error("Failed to decode token:", error);
      return null;
    }
  };

  useEffect(() => {
    const tokenCheckInterval = setInterval(checkTokenExpiration, 1800000);

    return () => {
      clearInterval(tokenCheckInterval);
    };
  }, []);

  if (loginInfo.loadingAuthentication) {
    return (
      <div className="container mt-5">
        <SpinnerComponent
          style={{ height: 60, width: 60 }}
          variant="info"
        ></SpinnerComponent>
      </div>
    );
  }

  if (!loginInfo.authenticated && !loginInfo.loadingAuthentication) {
    return (
      <div className="container mt-5">
        <Blocked message={loginInfo.message}></Blocked>
      </div>
    );
  }

  return props.children;
};

const Content = (props) => {
  return (
    <div className="container text-center mt-5 rounded-2">
      <div style={{ width: "70vw" }}>{props.children}</div>
    </div>
  );
};


const Blocked = ({ message }) => {
  return (
    <Content>
      <div>
        <div className="mb-3">
          <h2 className="fw-bold">Hold Up!</h2>
          <span className="text-muted">Error 401: Unauthorized</span>
        </div>
        <SiAdblock
          className="text-danger"
          style={{ height: 350, width: 350 }}
        ></SiAdblock>
      </div>
      <div className="mt-5">
        <h6>Your dont have permissions to acess this site: </h6>
        <h6>
          <strong className="text-danger">{message}</strong>
        </h6>
      </div>
    </Content>
  );
};

const SpinnerComponent = (props) => {
  return (
    <Spinner animation="border" role="status" style={props.style ? props.style : null} variant={props.variant? props.variant : null}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}



