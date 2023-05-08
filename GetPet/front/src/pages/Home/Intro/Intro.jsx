import React from "react";

import lottieJson from "../../../assets/lotties/animals.json";
import Lottie from "react-lottie-player";
import Button from "react-bootstrap/esm/Button";
// import {routes} from '../../'

const Intro = () => {
  return (
    <div className="container fluid">
        <div className="row justify-content-center ">
          <div className="col-xs-12 col-sm-4 mt-3">
            <Lottie
                loop
                play
              animationData={lottieJson}
              style={{ minWidth: 200, minHeight: 200, maxHeight: 425, maxWidth: 450}}
            ></Lottie>
          </div>
          <div
            className="col-xs-12 col-sm-6 mt-5 mb-5"
            style={{ paddingRight: "40px", paddingLeft: "40px" }}
          >
            <div className="text-wrapper">
              <h1 className="label-text" style={{fontSize: 60}}>
                <strong>Get to know your new friend!</strong>
              </h1>
              <p className="label-text">
                You can make a huge diffence in their lives!
              </p>
              <div>
                <Button variant="outline-light">Adopt your new friend!</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Intro;
