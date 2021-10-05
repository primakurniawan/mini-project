import { FcComments } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./ArticlesItem.scss";
import Profile from "./Profile";
import ReadTime from "./ReadTime";
import TagsList from "./TagsList";
import ToggleLike from "./ToggleLike";
import ToggleSave from "./ToggleSave";

const ArticlesItem = ({ article_id, image, title, updated_at, user_id, user_fullname, user_image, totalComments, tags, content }) => {
  console.log();
  return (
    <div className="glass ArticlesItem">
      <div
        className="ArticlesItem__img"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="ArticlesItem__text">
        <Profile user_fullname={user_fullname} user_image={user_image} updated_at={updated_at} />
        <Link to={`/articles/${article_id}`} className="ArticlesItem__text--title">
          {title}
        </Link>
        <TagsList tags={tags} />
        <div className="ArticlesItem__text--bottom">
          <ToggleLike article_id={article_id} />
          <span className="ArticlesItem__text--bottom--comments">
            <FcComments />
            {totalComments} comments
          </span>
          <ToggleSave article_id={article_id} />
          <ReadTime readTime={Math.ceil(content.split(" ").length / 200)} />
        </div>
      </div>
    </div>
  );
};

export default ArticlesItem;
