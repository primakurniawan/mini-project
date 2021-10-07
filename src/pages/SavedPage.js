import React from "react";
import { useSelector } from "react-redux";
import ArticlesList from "../components/ArticlesList";
import Layout from "../layouts/Layout";

const SavedPage = () => {
  const { saved } = useSelector((state) => state);

  return <Layout>{saved.length > 0 ? <ArticlesList articles={saved} /> : <h1 style={{ textAlign: "center" }}>Saved is Empty</h1>}</Layout>;
};

export default SavedPage;
