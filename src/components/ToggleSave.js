import { useMutation, useSubscription } from "@apollo/client";
import React from "react";
import { FiPocket } from "react-icons/fi";
import { FaGetPocket } from "react-icons/fa";
import { ADD_SAVES, DELETE_SAVES } from "../graphql/mutation";
import { CHECK_SAVES, TOTAL_SAVES } from "../graphql/subscription";
import "./ToggleSave.scss";
import { useHistory } from "react-router";

const ToggleSave = ({ article_id }) => {
  const user_id = localStorage.getItem("user_id");

  const { data: dataTotalSaves, error: errorTotalSaves, loading: loadingTotalSaves } = useSubscription(TOTAL_SAVES, { variables: { article_id } });

  const { error: errorCheckSave, data: dataCheckSave, loading: loadingCheckSave } = useSubscription(CHECK_SAVES, { variables: { article_id, user_id } });
  const [deleteSave, { error: errorDeleteSave, data: dataDeleteSave, loading: loadingDeleteSave }] = useMutation(DELETE_SAVES, { variables: { article_id, user_id } });
  const [addSave, { error: errorAddSave, data: dataAddSave, loading: loadingAddSave }] = useMutation(ADD_SAVES, { variables: { object: { article_id, user_id } } });

  const history = useHistory();

  const toggleSave = () => {
    if (user_id === null) {
      history.push("/auth");
    } else {
      dataCheckSave?.devmedia_saves.length > 0 ? deleteSave() : addSave();
    }
  };
  return (
    <span className="ToggleSave">
      <span onClick={toggleSave}>{dataCheckSave?.devmedia_saves.length > 0 ? <FaGetPocket className="ToggleSave__icon" /> : <FiPocket className="ToggleSave__icon" />}</span>
      {dataTotalSaves?.devmedia_saves_aggregate.aggregate.count} saves
    </span>
  );
};

export default ToggleSave;
