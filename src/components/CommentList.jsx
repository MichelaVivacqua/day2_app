import SingleComment from "./SingleComment";

const CommentsList = ({ comments }) => {
  return (
    <ul>
      {comments.map((comment) => (
        <SingleComment key={comment.asin} comment={comment} />
      ))}
    </ul>
  );
};

export default CommentsList;
