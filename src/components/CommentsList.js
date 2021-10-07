import { useSubscription } from "@apollo/client";
import { useParams } from "react-router";
import { GET_COMMENTS_BY_ARTICLE_ID } from "../graphql/subscription";
import CommentsItem from "./CommentsItem";
import "./CommentsList.scss";

const CommentList = () => {
  const { article_id } = useParams();

  const { data } = useSubscription(GET_COMMENTS_BY_ARTICLE_ID, { variables: { article_id } });

  return (
    <div className="commentsList">
      {data?.devmedia_comments.map((comment) => (
        <CommentsItem key={comment.id} comment={comment.comment} user_image={comment.user.image} user_fullname={comment.user.fullname} created_at={comment.created_at} />
      ))}
    </div>
  );
};

export default CommentList;
