import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent(props) {
  return (
    <div className='col smallScreen'>
      <Card
        style={{ width: 300, height: props.height ? props.height : "auto" }}
        className="mx-3"
      >
        <Card.Header className="bg-white text-center border-white mt-3" as="h5">
          {props.icon}
        </Card.Header>
        <Card.Body className="text-center">
          <Card.Title className="fw-bold">{props.title ? props.title : 'Title'}</Card.Title>
          <Card.Text className="fw-light">
            {props.text ? props.text : 'Text'}
          </Card.Text>
          <div className="d-flex justify-content-center mb-3">
            <Button variant="dark">{props.buttonText ? props.buttonText : 'Button text'}</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardComponent;
