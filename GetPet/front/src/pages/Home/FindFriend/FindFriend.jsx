import React from "react";
import { Formik, Form } from "formik";
// import * as Yup from "yup";

// import TextInput from "../../components/FormFields/TextInput";
import SelectInput from "../../../components/FormFields/Select";

import { MdPets } from "react-icons/md";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";


const FindFriend = () => {
  function handleOnKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  return (
    <div className="mt-5 smallMarginLeft" style={{marginLeft: 60}}>
      <div className="mx-5">
        <Formik
          initialValues={{}}
          enableReinitialize
          validationSchema={{}}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
          }}
        >
          {({
            isSubmitting,
            handleChange,
            handleBlur,
            values,
            setFieldValue,
            errors,
            touched,
          }) => (
            <Form onKeyDown={handleOnKeyDown}>
              <h2 className="fw-bold">Find & Adopt</h2>
              <Row className="mt-3">
                <Col xs={6}>
                  <SelectInput label="Breed" name="breed">
                    <option value="Select a option">Select a option</option>
                    <option value="Particular">Particular</option>
                    <option value="Comercial">Comercial</option>
                  </SelectInput>
                </Col>
                <Col xs={4}>
                  <SelectInput label="Size" name="size">
                    <option value="Select a option">Select a option</option>
                    <option value="Particular">Particular</option>
                    <option value="Comercial">Comercial</option>
                  </SelectInput>
                </Col>
                <Col>
                  <div style={{ marginTop: "30px" }}>
                    <Button
                      className="shadow-sm rounded border"
                      variant="dark"
                      style={{ minWidth: 200, maxHeight: 40 }}
                    >
                      Find friend <MdPets className="text-white"></MdPets>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FindFriend;
