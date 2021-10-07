import { FcComments } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./ArticlesItem.scss";
import Profile from "./Profile";
import Tags from "./Tags";
import ToggleLike from "./ToggleLike";
import ToggleSave from "./ToggleSave";

const ArticlesItem = ({ article_id, image, title, created_at, user_fullname, user_image, totalComments, tags, content, saved }) => {
  return (
    <div className="glass ArticlesItem">
      <div
        className="ArticlesItem__img"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="ArticlesItem__text">
        <Profile user_fullname={user_fullname} user_image={user_image} created_at={created_at} />
        <Link to={`/articles/${article_id}`} className="ArticlesItem__text--title">
          {title}
        </Link>
        <Tags tags={tags} />
        <div className="ArticlesItem__text--bottom">
          <ToggleLike article_id={article_id} />
          <span className="ArticlesItem__text--bottom--comments">
            <FcComments />
            {totalComments} comments
          </span>
          <ToggleSave article_id={article_id} totalSaved={saved} />
          <span className="ArticlesItem__text--bottom--readTime">{Math.ceil(content?.split(" ").length / 200)} min read time</span>
        </div>
      </div>
    </div>
  );
};

export default ArticlesItem;
