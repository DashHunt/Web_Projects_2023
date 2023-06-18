import React, { useEffect, useState } from "react";
import JWTService from "../data/JWT.service";

import SpinnerComponent from "./Spinner";

import Blocked from "../pages/Blocked/Blocked";

const ProtectedRoute = (props) => {
  const jwt = new JWTService();
  const [loginInfo, setLoginInfo] = useState({
    authenticated: false,
    loadingAuthentication: true,
    message: "Initial State",
  });

  useEffect(() => {
    const JWT = async () => {
      try {
        await jwt.getToken(process.env.REACT_APP_X_TESTER);
        setLoginInfo({
          authenticated: true,
          loadingAuthentication: false,
          message: "Authenticated successfully",
        });
      } catch (e) {
        setLoginInfo({
          authenticated: false,
          loadingAuthentication: false,
          message: "User not found",
        });
      }
    };

    JWT();
  }, []);

  const refreshAccessToken = async () => {
    try {
      await jwt.refreshToken(process.env.REACT_APP_X_TESTER, sessionStorage.getItem("refreshToken"));
      setLoginInfo({
        authenticated: true,
        loadingAuthentication: false,
        message: "Authenticated successfully",
      });
    } catch (e) {
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
      console.error("Failed to decode token:", error);
      return null;
    }
  };

  useEffect(() => {
    const tokenCheckInterval = setInterval(checkTokenExpiration, 10000);

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

export default ProtectedRoute;
