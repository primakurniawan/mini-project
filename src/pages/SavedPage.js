import React from "react";
import { useSelector } from "react-redux";
import ArticlesList from "../components/ArticlesList";
import Layout from "../layouts/Layout";

const SavedPage = () => {
  const { saved } = useSelector((state) => state);

  return (
    <Layout>
      <ArticlesList articles={saved} />
    </Layout>
  );
};

export default SavedPage;
