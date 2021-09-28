import { FcLikePlaceholder, FcComments } from "react-icons/fc";
import { FiPocket } from "react-icons/fi";
import "./ArticlesItem.scss";

const ArticlesItem = () => {
  return (
    <div className="glass ArticlesItem">
      <div
        className="ArticlesItem__img"
        style={{
          backgroundImage:
            "url(https://www.nttdata.com/au/en/-/media/nttdataapac/common-images/digital/ai/digital_ai09_1024x576.jpg?h=576&la=en-AU&w=1024&hash=86E2F9414B5DFFD9CD4F6E38E6D8AC11367ED682)",
        }}
      ></div>
      <div className="ArticlesItem__text">
        <div className="ArticlesItem__text--top">
          <img src="https://www.smartcompany.com.au/wp-content/uploads/2015/06/elonmusk-600-e1511400134909-100x100.jpg" alt="" className="ArticlesItem__text--top--img" />
          <div className="ArticlesItem__text--top--name">Elon Musk</div>
          <div className="ArticlesItem__text--top--date">jan 25 (2 days ago)</div>
        </div>
        <h1 className="ArticlesItem__text--title">How AI Take Over The World</h1>
        <ul className="ArticlesItem__text--tags">
          <li className="ArticlesItem__text--tags--tag">tag</li>
          <li className="ArticlesItem__text--tags--tag">tag</li>
          <li className="ArticlesItem__text--tags--tag">tag</li>
        </ul>
        <div className="ArticlesItem__text--bottom">
          <span className="ArticlesItem__text--bottom--likes">
            <FcLikePlaceholder />
            200 likes
          </span>
          <span className="ArticlesItem__text--bottom--comments">
            <FcComments />
            20 comments
          </span>
          <span className="ArticlesItem__text--bottom--saves">
            <FiPocket /> 50 saves
          </span>
          <span className="ArticlesItem__text--bottom--readTime">5 minutes read</span>
        </div>
      </div>
    </div>
  );
};

export default ArticlesItem;
