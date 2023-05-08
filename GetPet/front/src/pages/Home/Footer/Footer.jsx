import React from "react";

import { MdPets } from "react-icons/md";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="container mt-5 text-white">
      <div className="d-flex row">
        <div className="d-flex col">
          <MdPets
          className='showlarge'
            style={{
              height: "50px",
              width: "50px",
              color: "white",
            }}
          ></MdPets>{" "}
          <div className='marginSmall'>
            <span className="mx-2 fw-bold" style={{ fontSize: 20 }}>
              Pet Center
              <p className="mx-2 mt-1 fw-light" style={{ fontSize: 10 }}>
                Your new friend is waiting for you!
              </p>
            </span>
          </div>
        </div>

        <div className="mx-3 col">
          <div>
            <span className="mx-2 fw-bold" style={{ fontSize: 20 }}>
              Adopt Pet
              <p
                className="mx-2 mt-1 fw-light"
                style={{ fontSize: 10, cursor: "pointer" }}
              >
                Find friends
              </p>
            </span>
          </div>
        </div>

        <div className="mx-3 col">
          <div>
            <span className="mx-2 fw-bold" style={{ fontSize: 20 }}>
              Help them
              <p
                className="mx-2 mt-1 fw-light"
                style={{ fontSize: 10, cursor: "pointer" }}
                onClick={() => console.log("Hello")}
              >
                Become a volunteer
              </p>
            </span>
          </div>
        </div>

        <div className="mx-3 col">
          <div>
            <span className="mx-2 fw-bold" style={{ fontSize: 20 }}>
              Sign up for free
              <p
                className="mx-2 mt-1 fw-light"
                style={{ fontSize: 10, cursor: "pointer" }}
                onClick={() => console.log("Hello")}
              >
                Signup
              </p>
            </span>
          </div>
        </div>
      </div>

      <hr style={{ color: "white" }} />

      <div className="d-flex justify-content-between">
        <div>
          <span>Developed by Arthur Coutinho</span>
        </div>
        <div>
          <div>
            <FaFacebookF style={{cursor: 'pointer'}}></FaFacebookF>
            <FaInstagram className="mx-1" style={{cursor: 'pointer'}}></FaInstagram>
            <FaTwitter style={{cursor: 'pointer'}}></FaTwitter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
