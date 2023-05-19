import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { Button } from "react-bootstrap";

import {AiOutlineBackward} from 'react-icons/ai'

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const BackToTop = (props) => {
  const navigate = useNavigate()

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Back to home page
    </Tooltip>
  );

  return (
    <div>
        <OverlayTrigger 
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
          popUpTooltip={props.popUpTooltip}
        >
          <Button
            variant="danger"
            className="shadow shadow-sm border rounded-circle"
            style={{
              position: "fixed",
              top: "10px",
              left: "20px",
              height: "40px",
              width: "40px",
            }}
            onClick={() => navigate(props.path ? props.path : '/home')}
          >
            {'<'}
          </Button>
        </OverlayTrigger>
    </div>
  );
};

export default BackToTop;
