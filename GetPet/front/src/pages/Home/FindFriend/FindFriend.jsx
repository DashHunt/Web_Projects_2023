import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// import TextInput from "../../components/FormFields/TextInput";
import SelectInput from "../../../components/FormFields/Select";

import { MdPets } from "react-icons/md";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import PetsAPI from "../../../data/api/Pets";
import SpinnerComponent from "../../../components/Spinner";

const FindFriend = () => {
  const [petBreeds, setPetBreeds] = useState(null);
  const [petSizes, setPetSizes] = useState(null);

  useEffect(() => {
    const pets = new PetsAPI();
    pets
      .getBreeds()
      .then((result) => setPetBreeds(result.data))
      .catch((error) => console.log(error));

    pets
      .getSizes()
      .then((result) => setPetSizes(result.data))
      .catch((error) => console.log(error));
  }, []);

  function handleOnKeyDown(keyEvent) {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  }

  return (
    <div className="mt-5 smallMarginLeft" style={{ marginLeft: 60 }}>
      <div className="mx-5">
        <Formik
          initialValues={{ breed: "", size: "" }}
          enableReinitialize
          validationSchema={Yup.object().shape({
            breed: Yup.string().required(
              "This field is required for searching"
            ),
            size: Yup.string().required("This field is required for searching"),
          })}
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
            handleSubmit,
          }) => (
            <Form onKeyDown={handleOnKeyDown} onSubmit={handleSubmit}>
              <h2 className="fw-bold">Find & Adopt</h2>
              <Row className="mt-3">
                <Col xs={6}>
                  {petBreeds === null ? (
                    <SpinnerComponent></SpinnerComponent>
                  ) : (
                    <SelectInput label="Breed" name="breed">
                      <option value="Select a option">Select a option</option>
                      {petBreeds.map((breed) => {
                        return <option value={breed}>{breed}</option>;
                      })}
                    </SelectInput>
                  )}
                </Col>
                <Col xs={4}>
                  {petSizes === null ? (
                    <SpinnerComponent></SpinnerComponent>
                  ) : (
                    <SelectInput label="Size" name="size">
                      <option value="Select a option">Select a option</option>
                      {petSizes.map((sizes) => {
                        return (
                          <option value={sizes.size_id}>
                            {sizes.size_name}
                          </option>
                        );
                      })}
                    </SelectInput>
                  )}
                </Col>
                <Col>
                  <div style={{ marginTop: "30px" }}>
                    <Button
                      className="shadow-sm rounded border"
                      variant="dark"
                      style={{ minWidth: 200, maxHeight: 40 }}
                      type="submit"
                      disabled={isSubmitting}
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
