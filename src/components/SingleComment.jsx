const SingleComment = ({ comment }) => {
  return (
    <li>
      <strong>Rating: {comment.rating}</strong> - {comment.text}
    </li>
  );
};

export default SingleComment;
