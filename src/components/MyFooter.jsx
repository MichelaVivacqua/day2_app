import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MyFooter = function () {
  return (
    <Container fluid className="mt-5 bg bg-dark">
      <Row className="text-light">
        <Col className="col-md-6">Made with ♥ in sweet afternoon to study</Col>
        <Col className="col-md-3">Michela Vivacqua copyright</Col>
        <Col className="col-md-3">Ogni libro è bellissimo</Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
