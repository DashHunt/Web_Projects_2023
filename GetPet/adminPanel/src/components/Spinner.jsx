import Spinner from 'react-bootstrap/Spinner';

function SpinnerComponent(props) {
  return (
    <Spinner animation="border" role="status" style={props.style ? props.style : null} variant={props.variant? props.variant : null}>
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}

export default SpinnerComponent;