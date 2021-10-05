import { useSubscription } from "@apollo/client";
import MDEditor from "@uiw/react-md-editor";
import { FcComments } from "react-icons/fc";
import { useParams } from "react-router";
import { GET_ARTICLES_BY_ID } from "../graphql/subscription";
import "./ArticlesDetail.scss";
import CommentsAdd from "./CommentsAdd";
import CommentList from "./CommentsList";
import Loading from "./Loading";
import Profile from "./Profile";
import ReadTime from "./ReadTime";
import TagsList from "./TagsList";
import ToggleLike from "./ToggleLike";
import ToggleSave from "./ToggleSave";

const ArticlesDetail = () => {
  const { article_id } = useParams();
  const { data, loading, error } = useSubscription(GET_ARTICLES_BY_ID, { variables: { article_id } });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="ArticlesDetail glass">
      <div
        className="ArticlesDetail__img"
        style={{
          backgroundImage: `url(${data?.devmedia_articles_by_pk.image})`,
        }}
      ></div>

      <div className="ArticlesDetail__text">
        <div className="ArticlesDetail__text--top">
          <Profile user_image={data?.devmedia_articles_by_pk.user.image} user_fullname={data?.devmedia_articles_by_pk.user.fullname} updated_at={data?.devmedia_articles_by_pk.updated_at} />
          <div className="ArticlesDetail__text--top--right">
            <ToggleLike article_id={article_id} />
            <span className="ArticlesDetail__text--top--right--comments">
              <FcComments />
              {data?.devmedia_articles_by_pk.comments.length} comments
            </span>
            <ToggleSave article_id={article_id} />
            <ReadTime readTime={Math.ceil(data?.devmedia_articles_by_pk.content.split(" ").length / 200)} />
          </div>
        </div>
        <h1 className="ArticlesDetail__text--title">{data?.devmedia_articles_by_pk.title}</h1>
        {data?.devmedia_articles_by_pk.articles_tags && <TagsList tags={data?.devmedia_articles_by_pk.articles_tags} />}
        {console.log(data?.devmedia_articles_by_pk.articles_tags)}
        <div className="ArticlesDetail__text--content">
          <MDEditor.Markdown source={data?.devmedia_articles_by_pk.content} />
        </div>
      </div>

      <div className="ArticlesDetail__comments">
        <CommentsAdd />
        <CommentList />
      </div>
    </div>
  );
};

export default ArticlesDetail;
