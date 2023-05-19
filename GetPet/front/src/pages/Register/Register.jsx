import React from "react";
import { useNavigate } from "react-router-dom";
import BackToTop from "../../components/BackToTop";
import RegisterForm from "./RegisterForm/RegisterForm";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        backgroundColor: "lightpink",
        height: "100vh",
        width: "100vw",
        position: "absolute",
      }}
    >
      <div
        className="container shadow rounded-5 bg-white mt-5"
        style={{ height: "85vh", position: "relative", width: "80vw" }}
      >
        <div className="d-flex justify-content-center align-items-center">
          <div className="mt-5" style={{ width: "40vw" }}>
            <div className="mb-4">
              <h2 className="fw-bold">Register</h2>
              <span className="fw-lighter">
                Create your account for{" "}
                <strong className="fw-bold text-danger">free</strong>
              </span>
              <hr />
            </div>
            <RegisterForm></RegisterForm>
            <span className="fw-lighter mt-5" style={{ fontSize: 15 }}>
              Already have a account?{" "}
              <strong
                className="fw-bold text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Sign in and enjoy!
              </strong>
            </span>
          </div>
        </div>
      </div>
      <BackToTop path='/login'></BackToTop>
    </div>
  );
};

export default Register;
