import moment from "moment";
import "./Profile.scss";
const Profile = ({ user_image, user_fullname, updated_at }) => {
  return (
    <div className="Profile">
      <img src={user_image} alt="" className="Profile--img" />
      <div className="Profile--name">{user_fullname}</div>
      <div className="Profile--date">
        {moment(updated_at).format("MMM D YY")} ({moment(updated_at).fromNow()})
      </div>
    </div>
  );
};

export default Profile;
