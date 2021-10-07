import ArticlesItem from "./ArticlesItem";
import "./ArticlesList.scss";

const ArticlesList = ({ articles }) => {
  return (
    <div className="ArticlesList">
      {articles.map((article) => (
        <ArticlesItem
          key={article.id}
          article_id={article.id}
          image={article.image}
          title={article.title}
          created_at={article.created_at}
          user_id={article.user.id}
          user_image={article.user.image}
          user_fullname={article.user.fullname}
          totalLikes={article.likes_aggregate.aggregate.count}
          totalComments={article.comments_aggregate.aggregate.count}
          totalSaves={article.saved}
          tags={article.articles_tags}
          content={article.content}
          saved={article.saved}
        />
      ))}
    </div>
  );
};

export default ArticlesList;
