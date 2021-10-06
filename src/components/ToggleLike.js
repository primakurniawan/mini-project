import { useMutation, useSubscription } from "@apollo/client";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { ADD_LIKES, DELETE_LIKES } from "../graphql/mutation";
import { TOTAL_LIKES, CHECK_LIKES } from "../graphql/subscription";
import "./ToggleLike.scss";

const ToggleLike = ({ article_id }) => {
  const { user_id } = useSelector((state) => state.auth);

  const { data: dataTotalLikes, loading: loadingTotalLikes } = useSubscription(TOTAL_LIKES, { variables: { article_id } });
  const { data: dataCheckLike, loading: loadingCheckLike } = useSubscription(CHECK_LIKES, { variables: { article_id, user_id } });
  const [deleteLike, { loading: loadingDeleteLike }] = useMutation(DELETE_LIKES, { variables: { article_id, user_id } });
  const [addLike, { loading: loadingAddLike }] = useMutation(ADD_LIKES, { variables: { object: { article_id, user_id } } });

  const history = useHistory();

  const toggleLike = () => {
    if (!loadingTotalLikes) {
      if (user_id === null) {
        history.push("/auth");
      } else {
        if (!loadingCheckLike && !loadingAddLike && !loadingDeleteLike) {
          dataCheckLike?.devmedia_likes_aggregate.aggregate.count === 0 ? addLike() : deleteLike();
        }
      }
    }
  };

  return (
    <span className="ToggleLike">
      <span onClick={toggleLike}>{dataCheckLike?.devmedia_likes_aggregate.aggregate.count === 1 ? <FcLike className="ToggleLike__icon" /> : <FcLikePlaceholder className="ToggleLike__icon" />}</span>
      {dataTotalLikes?.devmedia_likes_aggregate.aggregate.count} likes
    </span>
  );
};

export default ToggleLike;
