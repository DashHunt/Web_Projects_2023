import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import SelectInput from "../../../components/FormFields/Select";
import TextInput from "../../../components/FormFields/TextInput";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import { MdPets } from "react-icons/md";
import ClientAPI from "../../../data/api/Client";
import TokenAPI from "../../../data/api/Token";

const LoginForm = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(false);

  function handleOnKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  return (
    <Formik
      initialValues={{ client_code: "", password: "" }}
      enableReinitialize
      validationSchema={Yup.object().shape({
        client_code: Yup.string().required("This field is required for login"),
        password: Yup.string().required("This field is required for login"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);

        const client = new ClientAPI();
        const token = new TokenAPI();

        client
          .login(values)
          .then((result) => {
            token
              .getToken({ user: values.client_code, client: "1" })
              .then((result) => {
                setErrorMessage(false);
                sessionStorage.setItem("accessToken", result.data.access_token);
                sessionStorage.setItem("refreshToken", result.data.refresh_token);
                navigate("/home");
                setSubmitting(false);
              })
              .catch((error) => {
                setErrorMessage(error.response.data.message);
                setSubmitting(false);
              });
            })
            .catch((error) => {
            setErrorMessage(error.response.data.message);
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form onKeyDown={handleOnKeyDown} onSubmit={handleSubmit}>
          <Row className="mt-3">
            <TextInput
              label="User Name"
              name="client_code"
              type="text"
              placeholder="User Name"
            ></TextInput>
          </Row>
          <Row className="mt-3">
            <TextInput
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            ></TextInput>
          </Row>
          <Row>
            <div style={{ marginTop: "20px" }}>
              <Button
                className="shadow-sm rounded-3 border"
                variant="danger"
                style={{ minWidth: "100%", minHeight: 45 }}
                type="submit"
                disabled={isSubmitting}
              >
                Login <MdPets className="text-white"></MdPets>
              </Button>
            </div>
          </Row>
          {errorMessage ? <h6 className='mt-2 text-danger fw-bold'>{errorMessage}</h6> : null}
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
