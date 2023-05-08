import React from "react";

import Button from "react-bootstrap/esm/Button";
import lottieJson from "../../../assets/lotties/cats-man.json";
import Lottie from "react-lottie-player";


const HowItWorks = () => {
  return (
    <div className="d-flex">
      <div style={{ minHeight: 300, width: 900, backgroundColor: "salmon" }} className='showlarge'>
        <div className="row justify-content-center">
          <Lottie
            loop
            play
            animationData={lottieJson}
            style={{
              minWidth: 100,
              minHeight: 300,
              maxHeight: 450,
              maxWidth: 450,
            }}
          ></Lottie>
        </div>
      </div>
      <div style={{ minHeight: 300, width: 600 }} className='mediaScreen'>
        <div className="row justify-content-center mx-5">
          <div
            className="col-xs-12 mt-5 mb-5"
            style={{ paddingRight: "40px", paddingLeft: "40px" }}
          >
            <div className="text-wrapper">
              <h3 className="label-text" style={{ fontSize: 30 }}>
                <strong>How it works?</strong>
              </h3>
              <div className="label-text fw-light row mb-4">
                <div>
                  <div
                    className="bg-dark text-white text-center align-items-center fw-bold"
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 50,
                      display: "inline-block",
                    }}
                  >
                    1
                  </div>
                  <span className="mx-2">Find a pet you wish to take home</span>
                </div>
                <div>
                  <div
                    className="bg-dark text-white text-center align-items-center fw-bold mt-2"
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 50,
                      display: "inline-block",
                    }}
                  >
                    2
                  </div>
                  <span className="mx-2">
                    Go through our adoption requirements
                  </span>
                </div>
                <div>
                  <div
                    className="bg-dark text-white text-center align-items-center fw-bold mt-2"
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 50,
                      display: "inline-block",
                    }}
                  >
                    3
                  </div>
                  <span className="mx-2">
                    Schedule a visit with the shelter
                  </span>
                </div>
                <div>
                  <div
                    className="bg-dark text-white text-center align-items-center fw-bold mt-2"
                    style={{
                      height: 25,
                      width: 25,
                      borderRadius: 50,
                      display: "inline-block",
                    }}
                  >
                    4
                  </div>
                  <span className="mx-2">
                    Meet the pet and complete the process
                  </span>
                </div>
              </div>
              <div>
                <Button className="shadow-sm" variant="dark">
                  Fill form
                </Button>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-4 mt-3"></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
