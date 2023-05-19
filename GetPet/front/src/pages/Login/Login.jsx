import React from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";

import { AiOutlineGoogle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { MdPets } from "react-icons/md";

import lottieJson from "../../assets/lotties/43901-cute-dog.json";
import Lottie from "react-lottie-player";

import "./Login.css";
import LoginForm from "./Form/LoginForm";
import BackToTop from "../../components/BackToTop";

const Login = () => {
  const navigate = useNavigate()

  return (
    <>
      <div style={{ height: "100vh", backgroundColor: "lightpink" }}>
        <div
          class="d-flex align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div
            class="p-2 text-white shadow showlarge"
            style={{
              width: "25vw",
              backgroundColor: "salmon",
              borderBottomLeftRadius: 10,
              borderTopLeftRadius: 10,
              height: "70vh",
            }}
          >
            <div className="mx-2 text-center" style={{ marginTop: "1.5rem" }}>
              <div>
                <Lottie
                  loop={false}
                  play
                  animationData={lottieJson}
                  style={{
                    minWidth: 200,
                    minHeight: 200,
                    maxHeight: 425,
                    maxWidth: 450,
                  }}
                ></Lottie>
              </div>
              <div>
                <h3 className="fw-bold mt-2">
                  Your new puppy is waiting for you!
                </h3>
              </div>
            </div>
          </div>
          <div
            class="p-2 bg-white text-black shadow roundedBorder"
            style={{
              width: "45vw",
              borderBottomRightRadius: 10,
              borderTopRightRadius: 10,
              height: "70vh",
            }}
          >
            <div className="mx-5">
              <h2
                className="fw-bold mobileTop"
                style={{ marginTop: "5rem"}}
              >
                Get's started
              </h2>
              <h6 className="text-muted mt-3">
                Don't have a account?{" "}
                <strong style={{ color: "salmon", cursor: 'pointer' }} onClick={() => navigate('/register')}>Sign in for free</strong>
              </h6>
              {/* <div className="mt-4 d-flex">
                <Button
                  variant="outline-dark"
                  className="align-items-center text-center"
                >
                  <AiOutlineGoogle
                    style={{ height: 20, width: 30, color: "green" }}
                  ></AiOutlineGoogle>{" "}
                  Sign in with Google
                </Button>
                <Button
                  variant="primary"
                  className="align-items-center text-center mx-3"
                >
                  <MdFacebook style={{ height: 20, width: 30 }}></MdFacebook>{" "}
                  Sign in with Facebook
                </Button>
              </div> */}
              <div
                className="text-center mt-3"
                style={{ borderBottom: "1px solid lightgray" }}
              >
                <span className="text-center text-muted"></span>
              </div>

              <div>
                <LoginForm></LoginForm>
              </div>
            </div>
          </div>
        </div>
        <BackToTop></BackToTop>
      </div>
    </>
  );
};

export default Login;
