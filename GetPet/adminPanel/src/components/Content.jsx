import React from "react";

const Content = (props) => {
  return (
    <div className="container text-center mt-5 rounded-2">
      <div style={{ width: "70vw" }}>{props.children}</div>
    </div>
  );
};

export default Content;
