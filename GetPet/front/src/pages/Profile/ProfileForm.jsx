import React, { useEffect, useState } from 'react'

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

function ProfileForm(props) {
    const [user, setUser] = useState({
        client_user_code: props.user,
		name: "",
		email: "",
		password: "",
		street: "",
		number: "",
		address_complement: "",
		neighborhood: "",
		city: "",
		state: "",
		zip_code: "",
		phone: ""
    })

    function handleChange(event) {
        const { name, value } = event.target;
        setUser((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      }

  return (
    <Form>
      <Row className="mb-4">
        <h1 className="fw-bold">Profile info</h1>
        <span className="text-muted">Here you can visualize the profile of:  {props.user}</span>
      </Row>
      <hr />
      <Row className="mb-3">
        <h5 className="fw-bold">Basic information</h5>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>User Code</Form.Label>
          <Form.Control name='client_user_code' type="text" placeholder="User code" value={user.client_user_code} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Name" value={user.name} onChange={handleChange}/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name='email' type="email" placeholder="Email" value={user.email} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" value={user.password} onChange={handleChange}/>
        </Form.Group>
      </Row>

      <hr />
      <Row className="mb-3">
        <h5 className="fw-bold mb-3">Address info</h5>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="ZIP Code"
            aria-label="ZIP Code"
            aria-describedby="basic-addon2"
            name='zip_code'
            value={user.zip_code} onChange={handleChange}
            type='number'
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>

        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="City" name='city' value={user.city} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>State</Form.Label>
          <Form.Control placeholder="State" name='state' value={user.state} onChange={handleChange}/>
        </Form.Group>
      </Row>

      <Row>
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Street</Form.Label>
          <Form.Control placeholder="Street" name='street' value={user.street} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Neighborhood</Form.Label>
          <Form.Control placeholder="Neighborhood" name='neighborhood' value={user.neighborhood} onChange={handleChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Number</Form.Label>
          <Form.Control placeholder="Number" type='number' name='number' value={user.number} onChange={handleChange}/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridAddress2">
          <Form.Label>Complement</Form.Label>
          <Form.Control placeholder="Complement" name='complement' value={user.complement} onChange={handleChange}/>
        </Form.Group>
      </Row>

      <hr />

      <Row className="mb-5">
        <h5 className="fw-bold mb-3">Phone info</h5>
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Phone number 1</Form.Label>
          <Form.Control placeholder="Phone number 1" name='phone' type='number' value={user.phone} onChange={handleChange}/>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
}

export default ProfileForm;
