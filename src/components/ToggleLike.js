import { useMutation, useSubscription } from "@apollo/client";
import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { useHistory } from "react-router";
import { ADD_LIKES, DELETE_LIKES } from "../graphql/mutation";
import { CHECK_LIKES, TOTAL_LIKES } from "../graphql/subscription";
import "./ToggleLike.scss";

const ToggleLike = ({ article_id }) => {
  const user_id = localStorage.getItem("user_id");

  const { data: dataTotalLikes } = useSubscription(TOTAL_LIKES, { variables: { article_id } });
  const { data: dataCheckLike } = useSubscription(CHECK_LIKES, { variables: { article_id, user_id } });
  const [deleteLike] = useMutation(DELETE_LIKES, { variables: { article_id, user_id } });
  const [addLike] = useMutation(ADD_LIKES, { variables: { object: { article_id, user_id } } });

  const history = useHistory();

  const toggleLike = () => {
    if (user_id === null) {
      history.push("/auth");
    } else {
      dataCheckLike?.devmedia_likes_aggregate.aggregate.count === 0 ? addLike() : deleteLike();
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
