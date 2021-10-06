import moment from "moment";
import "./NewsItem.css";

const NewsItem = ({ author, content, description, urlToImage, publishedAt, url, title, name }) => {
  const newContent = content ? content.replace(/\[.*?\]/g, "").replace("…", "") : content;
  return (
    <div className={"blog-card"}>
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${urlToImage ?? "https://i.stack.imgur.com/y9DpT.jpg"})` }}></div>
        <ul className="details">
          <li className="author">{author}</li>
          <li className="date">{moment(publishedAt).format("LL")}</li>
          <li className="name">{name}</li>
        </ul>
      </div>
      <div className="description">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p> {newContent}</p>
        <p className="read-more">
          <a href={url} target="_blank" rel="noreferrer">
            Read More
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
