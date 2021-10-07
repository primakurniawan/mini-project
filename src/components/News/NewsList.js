import useFetchNews from "./../../hooks/useFetchNews";
import Loading from "./../Loading";
import NewsItem from "./NewsItem";

const NewsList = () => {
  const [{ news, loading, error }] = useFetchNews();
  const { articles, queries, totalResults } = news;
  return (
    <>
      {!loading && queries.q !== "" && (
        <h2 style={{ textAlign: "center" }}>
          There is {totalResults} results for {queries.q}
        </h2>
      )}
      {loading ? (
        <Loading />
      ) : (
        <div className="blog-cards">
          {articles.map((e, i) => (
            <NewsItem
              key={i}
              title={e.title}
              author={e.author}
              content={e.content}
              urlToImage={e.urlToImage}
              description={e.description}
              url={e.url}
              publishedAt={e.publishedAt}
              name={e.source.name}
            />
          ))}
        </div>
      )}

      {error && "Sorry something bad happened"}
    </>
  );
};

export default NewsList;
