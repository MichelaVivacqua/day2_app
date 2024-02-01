import React, { Component } from "react";
import CommentsList from "./CommentList";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  fetchComments = () => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" +
        this.props.libro.asin,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYTRhNjViMjYxNTAwMTk4YTY5NjMiLCJpYXQiOjE3MDY3OTYxOTgsImV4cCI6MTcwODAwNTc5OH0.VvfMkGOKa1Yw3SYEiZxS2vqKXuAeQyFtD_xjuVOAJsE",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Errore nel fetch delle recensioni");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ comments: data });
      })
      .catch((error) => {
        console.error("Errore generale nel fetch delle recensioni", error);
      });
  };

  componentDidMount() {
    // Quando il componente è montato, effettua il fetch delle recensioni
    this.fetchComments();
  }

  render() {
    return (
      <div>
        <h3>Recensioni</h3>
        <CommentsList comments={this.state.comments} />
        {/* <AddComment /> */}
      </div>
    );
  }
}

export default CommentArea;
