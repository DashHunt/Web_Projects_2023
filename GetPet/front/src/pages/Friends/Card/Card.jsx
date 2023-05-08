import { useEffect, useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PetsAPI from "../../../data/api/Pets";
import SpinnerComponent from "../../../components/Spinner";

function PetCard(props) {
  const [b64Image, setB64Image] = useState(null);

  useEffect(() => {
    const pets = new PetsAPI();
    if (props.id !== undefined) {
      pets
        .getImage({
          petId: props.id,
        })
        .then((result) => setB64Image(result.data.message))
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <Card
      style={{ width: "100%", borderRadius: "3%" }}
      className="shadow col mx-2 mb-3"
      key={props.i ? props.i : ""}
    >
      {b64Image == null ? (
        <div className="d-flex justify-content-center align-items-center mt-5 mb-5">
          <SpinnerComponent
            style={{ height: 65, width: 65 }}
            variant="danger"
          ></SpinnerComponent>
        </div>
      ) : (
        <Card.Img
          variant="top"
          src={"data:image/png;base64," + b64Image}
          style={{ height: "100%", borderRadius: "6%" }}
          className="border-bottom mt-2 shadow-sm"
        />
      )}
      <Card.Body>
        <Card.Title className="fw-bold">{props.title.toUpperCase()}</Card.Title>
        <div className="d-flex justify-content-between">
          <Card.Text className="fw-light text-secondary">
            {props.text}
          </Card.Text>
          <Card.Text
            className="text-center align-items-center fw-bold rounded shadow-sm"
            style={{
              height: "100%",
              backgroundColor: "#E2955C",
              color: "#f7e3d4",
            }}
          >
            <span className="mx-2">{props.age} YRS</span>
          </Card.Text>
        </div>
        <Button variant="primary" className="shadow">
          See more!
        </Button>
      </Card.Body>
    </Card>
  );
}

export default PetCard;
