import ArticlesItem from "./ArticlesItem";
import "./ArticlesList.scss";
const articles = [
  {
    author: "prime",
    time: "yesterday",
    title: "Title",
    content: "content",
    likes: 200,
    comments: 200,
    saves: 200,
  },
  {
    author: "prime",
    time: "yesterday",
    title: "Title",
    content: "content",
    likes: 200,
    comments: 200,
    saves: 200,
  },
  {
    author: "prime",
    time: "yesterday",
    title: "Title",
    content: "content",
    likes: 200,
    comments: 200,
    saves: 200,
  },
  {
    author: "prime",
    time: "yesterday",
    title: "Title",
    content: "content",
    likes: 200,
    comments: 200,
    saves: 200,
  },
  {
    author: "prime",
    time: "yesterday",
    title: "Title",
    content: "content",
    likes: 200,
    comments: 200,
    saves: 200,
  },
  {
    author: "prime",
    time: "yesterday",
    title: "Title",
    content: "content",
    likes: 200,
    comments: 200,
    saves: 200,
  },
];
const ArticlesList = () => {
  return (
    <div className="ArticlesList">
      {articles.map((e) => (
        <ArticlesItem />
      ))}
    </div>
  );
};

export default ArticlesList;
