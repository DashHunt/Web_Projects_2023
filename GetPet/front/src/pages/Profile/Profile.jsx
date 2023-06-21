import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../../components/Navbar/Navbar";

import ProfileForm from "./ProfileForm";
import Form from "react-bootstrap/Form";

import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

const Profile = () => {
  const navigate = useNavigate();

  if (sessionStorage.getItem("user") === null) return navigate("/unauthorized");

  return (
    <NavbarComponent>
      <div
        style={{ marginTop: 100, marginBottom: 50 }}
        className="container shadow rounded-3"
      >
        <div>
          <div className="d-flex w-100">
            <div style={{ borderRight: "solid #d3d3d3" }}>
              <div
                style={{
                  minHeight: 300,
                  minWidth: 300,
                  maxHeight: 300,
                  maxWidth: 300,
                  borderRadius: 200,
                }}
                className="border mt-3 mb-3 shadow-sm mx-5"
                aria-placeholder="Photo"
              ></div>
              <div className="text-center">
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  size="sm"
                >
                  Select picture
                </Button>
              </div>
            </div>

            <div className="ms-5 mb-5 mt-3">
              <ProfileForm user={sessionStorage.getItem("user")}></ProfileForm>
            </div>
          </div>
        </div>
      </div>
    </NavbarComponent>
  );
};

export default Profile;
