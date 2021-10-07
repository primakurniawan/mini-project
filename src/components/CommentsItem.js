import "./CommentsItem.scss";
import Profile from "./Profile";

const CommentsItem = ({ comment, user_image, user_fullname, created_at }) => {
  return (
    <div className="CommentsItem glass">
      <Profile user_fullname={user_fullname} user_image={user_image} created_at={created_at} />
      <div className="CommentsItem--comment">{comment}</div>
    </div>
  );
};

export default CommentsItem;
