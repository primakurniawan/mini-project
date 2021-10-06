import { useLazyQuery, useMutation } from "@apollo/client";
import MDEditor from "@uiw/react-md-editor";
import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { ADD_ARTICLES_TAGS, ADD_ARTICLE_AND_TAGS } from "../graphql/mutation";
import { GET_TAG_ID_BY_TITLE } from "../graphql/query";
import "./ArticlesAddNew.scss";
import Loading from "./Loading";
const ArticlesAddNew = () => {
  const user_id = localStorage.getItem("user_id");

  const imageEl = useRef();
  const titleEl = useRef();
  const tagsEl = useRef();
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("**Hello world!!!**");
  const [newArticleId, setNewArticleId] = useState("");
  const [allNewTagsId, setAllNewTagsId] = useState([]);

  const [addArticleAndTags, { data, loading }] = useMutation(ADD_ARTICLE_AND_TAGS);
  const [getAllNewTagsId, { data: dataAllNewTagsId, loading: loadingAllNewTagsId }] = useLazyQuery(GET_TAG_ID_BY_TITLE);
  const [addArticleTags, { data: dataArticleTags, loading: loadingArticleTags }] = useMutation(ADD_ARTICLES_TAGS);

  const history = useHistory();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const image = imageEl.current.value;
    const title = titleEl.current.value;
    setTags((tags) => tagsEl.current.value.split(",").map((tag) => tag.trim()));

    if (/([a-z\-_0-9/:.]*\.(jpg|jpeg|png|gif))/i.test(image) && title !== "" && content !== "" && tags.length !== 0) {
      addArticleAndTags({
        variables: {
          newArticle: { image, title, content, user_id },
          newTags: tags.map((tag) => {
            return { title: tag };
          }),
        },
      });
    }
  };

  useEffect(() => {
    if (data?.insert_devmedia_articles_one.id) {
      setNewArticleId((newArticleId) => data?.insert_devmedia_articles_one.id);
      getAllNewTagsId({ variables: { tags } });
    }
  }, [data?.insert_devmedia_articles_one.id, getAllNewTagsId, tags]);

  useEffect(() => {
    if (dataAllNewTagsId?.devmedia_tags.length > 0) {
      setAllNewTagsId((allNewTagsId) => dataAllNewTagsId?.devmedia_tags);
    }
  }, [addArticleTags, dataAllNewTagsId?.devmedia_tags]);

  useEffect(() => {
    if (newArticleId !== "") {
      addArticleTags({
        variables: {
          objects: allNewTagsId.map((e) => {
            return { article_id: newArticleId, tag_id: e.id };
          }),
        },
      });
    }
  }, [addArticleTags, allNewTagsId, history, newArticleId]);

  useEffect(() => {
    if (dataArticleTags?.insert_devmedia_articles_tags.affected_rows) {
      history.push(`/articles/${newArticleId}`);
    }
  }, [dataArticleTags, history, newArticleId]);

  if (user_id === null) {
    history.push("/auth");
  }

  if (loading || loadingAllNewTagsId || loadingArticleTags) {
    return <Loading />;
  }

  return (
    <form className="ArticlesAddNew" onSubmit={onSubmitHandler}>
      <input className="ArticlesAddNew--title glass" type="text" ref={imageEl} placeholder="Add Article Image ..." />
      <input className="ArticlesAddNew--title glass" type="text" ref={titleEl} placeholder="Add Article Title ..." />
      <input className="ArticlesAddNew--tags glass" type="text" ref={tagsEl} placeholder="Add tags separate with comma (,) ..." />
      <MDEditor className="ArticlesAddNew--content glass" value={content} onChange={setContent} />
      <input className="ArticlesAddNew--button glass" type="submit" placeholder="Publish" />
    </form>
  );
};

export default ArticlesAddNew;
