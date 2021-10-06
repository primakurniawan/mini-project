import NewsList from "../components/News/NewsList";
import NewsPagination from "../components/News/NewsPagination";
import NewsSearch from "../components/News/NewsSearch";
import Layout from "../layouts/Layout";

const NewsPage = () => {
  return (
    <Layout>
      <NewsSearch />
      <NewsList />
      <NewsPagination />
    </Layout>
  );
};

export default NewsPage;
