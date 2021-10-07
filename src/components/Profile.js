import moment from "moment";
import "./Profile.scss";
const Profile = ({ user_image, user_fullname, created_at }) => {
  return (
    <div className="Profile">
      <img src={user_image} alt="" className="Profile--img" />
      <div className="Profile--name">{user_fullname}</div>
      <div className="Profile--date">
        {moment(created_at).format("MMM D YY")} ({moment(created_at).fromNow()})
      </div>
    </div>
  );
};

export default Profile;
