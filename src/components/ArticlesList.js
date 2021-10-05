import { useQuery, useSubscription } from "@apollo/client";
import { GET_ALL_ARTICLES } from "../graphql/query";
import ArticlesItem from "./ArticlesItem";
import "./ArticlesList.scss";
import Loading from "./Loading";

const ArticlesList = () => {
  const { data, loading } = useQuery(GET_ALL_ARTICLES);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="ArticlesList">
      {data?.devmedia_articles.map((article) => (
        <ArticlesItem
          key={article.id}
          article_id={article.id}
          image={article.image}
          title={article.title}
          updated_at={article.updated_at}
          user_id={article.user.id}
          user_image={article.user.image}
          user_fullname={article.user.fullname}
          totalLikes={article.likes_aggregate.aggregate.count}
          totalComments={article.comments_aggregate.aggregate.count}
          totalSaves={article.saves_aggregate.aggregate.count}
          tags={article.articles_tags}
          content={article.content}
        />
      ))}
    </div>
  );
};

export default ArticlesList;
