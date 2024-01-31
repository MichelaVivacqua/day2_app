import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  handleToggleSelected = () => {
    this.setState((state) => ({
      selected: !state.selected,
    }));
  };
  render() {
    const { selected } = this.state;
    return (
      <Col md={2}>
        <Card
          onClick={this.handleToggleSelected}
          style={{ width: "8rem", border: selected ? "2px solid red" : "none" }}
        >
          <Card.Img variant="top" src={this.props.libro.img} />
          <Card.Body>
            <Card.Title>{this.props.libro.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
