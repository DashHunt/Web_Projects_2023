import Spinner from 'react-bootstrap/Spinner';

function SpinnerComponent(props) {
  return <Spinner animation="border" variant={props.variant ? props.variant : "primary"} style={props.style ? props.style : {}}/>;
}

export default SpinnerComponent;