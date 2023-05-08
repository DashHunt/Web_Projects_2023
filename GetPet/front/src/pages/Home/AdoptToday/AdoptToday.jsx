import React from "react";

import lottieJson from "../../../assets/lotties/19936-astronaut-dog.json";
import Lottie from "react-lottie-player";
import Button from "react-bootstrap/esm/Button";

const AdoptToday = () => {
  return (
    <div className="container fluid">
      <div className="row justify-content-center ">
        <div
          className="col-xs-12 col-sm-6 mt-5 mb-5"
          style={{ paddingRight: "40px", paddingLeft: "40px" }}
        >
          <div className="text-wrapper">
            <h3 className="label-text" style={{ fontSize: 40 }}>
              <strong>Adopt today</strong>
            </h3>
            <p className="label-text fw-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ut
              mattis lorem, a fermentum mi. Phasellus in augue ipsum. Sed vel
              neque eu ligula cursus dignissim. Nullam vulputate lorem eu dolor
              elementum molestie. Vivamus eget eros nisl. Nullam nibh lacus,
              sodales at mauris ac, condimentum euismod nisi. Cras gravida
              pulvinar purus eu consequat. Sed viverra at velit ac ultrices.
              Fusce vel erat orci. Morbi vel erat feugiat purus gravida
              sollicitudin vitae non velit. Integer ut nunc eget ex facilisis
              varius non at augue. Morbi arcu sem, accumsan in pellentesque nec,
              laoreet ac elit. Aliquam erat volutpat.
            </p>
            <div>
              <Button className="shadow-sm" variant="dark">
                Adopt now
              </Button>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-4 mt-3">
          <Lottie
            loop
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
      </div>
    </div>
  );
};

export default AdoptToday;
