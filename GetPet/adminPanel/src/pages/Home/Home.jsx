import React from "react";
import Sidebar from "../../components/Sidebar";

import Lottie from "react-lottie-player";
import lottieJson from "../../assets/lotties/72342-welcome.json";
import Content from "../../components/Content";

const Home = () => {
  return (
    <Sidebar>
      <Content>
        <div className="d-flex justify-content-center ">
          <Lottie
            play
            loop={false}
            animationData={lottieJson}
            style={{
              minWidth: 200,
              minHeight: 200,
              maxHeight: 425,
              maxWidth: 450,
            }}
          ></Lottie>
        </div>
        <h2 className="fw-bold mb-3">
          Hello {sessionStorage.getItem("user")}!
        </h2>
        <span className="text-muted fw-lighter">
          Pet Center Admin Tool (version: 1.0.0)
        </span>
      </Content>
    </Sidebar>
  );
};

export default Home;
