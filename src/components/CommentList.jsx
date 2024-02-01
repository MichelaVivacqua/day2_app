import { ListGroup } from "react-bootstrap";

const CommentsList = (props) => {
  return (
    <ListGroup>
      {" "}
      {props.comments.map((comment) => (
        <ListGroup.Item key={comment._id}>
          {comment.rate} - {comment.comment}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default CommentsList;
