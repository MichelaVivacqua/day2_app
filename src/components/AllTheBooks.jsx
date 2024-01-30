import libri from "./data/scifi.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function AllTheBooks() {
  const bookCards = libri.map((libro) => (
    <Col key={libro.asin} md={2}>
      <Card style={{ marginBottom: "20px" }}>
        <Card.Img variant="top" src={libro.img} />
        <Card.Body>
          <Card.Title>{libro.title}</Card.Title>
          <Card.Text>{libro.category}</Card.Text>
          <Button variant="primary">${libro.price}</Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <Container>
      <Row>{bookCards}</Row>
    </Container>
  );
}
export default AllTheBooks;
