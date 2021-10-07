import { useSubscription } from "@apollo/client";
import React from "react";
import ArticlesList from "../components/ArticlesList";
import Loading from "../components/Loading";
import { GET_ALL_ARTICLES } from "../graphql/subscription";
import Layout from "../layouts/Layout";

const ArticlesPage = () => {
  const { data, loading } = useSubscription(GET_ALL_ARTICLES);

  if (loading) {
    return <Loading />;
  }

  return (
    <Layout>
      <ArticlesList articles={data?.devmedia_articles} />
    </Layout>
  );
};

export default ArticlesPage;
