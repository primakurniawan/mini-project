import { useMutation } from "@apollo/client";
import { useRef } from "react";
import { useHistory, useParams } from "react-router";
import { ADD_COMMENT } from "../graphql/mutation";
import "./CommentsAdd.scss";

const CommentsAdd = () => {
  const user_id = localStorage.getItem("user_id");

  const { article_id } = useParams();

  const commentEl = useRef();

  const [addComment, { loading: loadingAddComment }] = useMutation(ADD_COMMENT);

  const history = useHistory();

  const addCommentHandler = (e) => {
    e.preventDefault();
    if (!loadingAddComment) {
      const comment = commentEl.current.value;
      if (user_id === null) {
        history.push("/auth");
      }
      if (comment !== "") {
        addComment({
          variables: {
            object: {
              user_id,
              comment,
              article_id,
            },
          },
        });
        commentEl.current.value = "";
      }
    }
  };

  return (
    <form className="CommentsAdd" onSubmit={addCommentHandler}>
      <input type="text" className="CommentsAdd--input glass" placeholder="add comment ..." ref={commentEl} />
      <button className="CommentsAdd--button glass" type="submit">
        Add Comment
      </button>
    </form>
  );
};

export default CommentsAdd;
