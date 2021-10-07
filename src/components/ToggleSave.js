import { useMutation, useSubscription } from "@apollo/client";
import { FiPocket } from "react-icons/fi";
import { FaGetPocket } from "react-icons/fa";
import { ADD_SAVED, REMOVED_SAVED } from "../graphql/mutation";
import { GET_ARTICLES_BY_ID } from "../graphql/subscription";
import "./ToggleSave.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addSaved, removeSaved } from "../store/savedSlice";

const ToggleSave = ({ article_id, totalSaved }) => {
  const { saved } = useSelector((state) => state);

  const { data } = useSubscription(GET_ARTICLES_BY_ID, { variables: { article_id } });
  const [addSavedDb] = useMutation(ADD_SAVED);
  const [removeSavedDb] = useMutation(REMOVED_SAVED);

  const dispatch = useDispatch();

  const toggleSave = () => {
    if (saved.find((e) => e.article_id === article_id)) {
      dispatch(removeSaved({ article_id }));
      removeSavedDb({ variables: { article_id } });
    } else {
      dispatch(addSaved({ article: { ...data?.devmedia_articles_by_pk, article_id } }));
      addSavedDb({ variables: { article_id } });
    }
  };

  return (
    <span className="ToggleSave">
      <span onClick={toggleSave}>{saved.find((e) => e?.article_id === article_id) ? <FaGetPocket className="ToggleSave__icon" /> : <FiPocket className="ToggleSave__icon" />}</span>
      {totalSaved} saved
    </span>
  );
};

export default ToggleSave;
