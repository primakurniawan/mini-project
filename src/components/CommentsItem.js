import "./CommentsItem.scss";
import Profile from "./Profile";

const CommentsItem = ({ comment, user_image, user_fullname, updated_at }) => {
  return (
    <div className="CommentsItem glass">
      <Profile user_fullname={user_fullname} user_image={user_image} updated_at={updated_at} />
      <div className="CommentsItem--comment">{comment}</div>
    </div>
  );
};

export default CommentsItem;
