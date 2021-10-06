import { useMutation, useSubscription } from "@apollo/client";
import { FiPocket } from "react-icons/fi";
import { FaGetPocket } from "react-icons/fa";
import { ADD_SAVES, DELETE_SAVES } from "../graphql/mutation";
import { TOTAL_SAVES, CHECK_SAVES } from "../graphql/subscription";
import "./ToggleSave.scss";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const ToggleSave = ({ article_id }) => {
  const { user_id } = useSelector((state) => state.auth);

  const { data: dataTotalSaves, loading: loadingTotalSaves } = useSubscription(TOTAL_SAVES, { variables: { article_id } });

  const { data: dataCheckSave, loading: loadingCheckSave } = useSubscription(CHECK_SAVES, { variables: { article_id, user_id } });
  const [deleteSave, { loading: loadingDeleteSave }] = useMutation(DELETE_SAVES, { variables: { article_id, user_id } });
  const [addSave, { loading: loadingAddSave }] = useMutation(ADD_SAVES, { variables: { object: { article_id, user_id } } });

  const history = useHistory();

  const toggleSave = () => {
    if (!loadingTotalSaves) {
      if (user_id === null) {
        history.push("/auth");
      } else {
        if (!loadingCheckSave && !loadingAddSave && !loadingDeleteSave) {
          dataCheckSave?.devmedia_saves.length > 0 ? deleteSave() : addSave();
        }
      }
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
