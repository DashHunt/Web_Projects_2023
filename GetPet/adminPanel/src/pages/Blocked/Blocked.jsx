import React from "react";
import Content from "../../components/Content";

import { SiAdblock } from "react-icons/si";

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

export default Blocked;
