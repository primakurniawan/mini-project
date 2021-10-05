import { useQuery, useSubscription } from "@apollo/client";
import { GET_ALL_ARTICLES } from "../graphql/subscription";
// import { GET_ALL_ARTICLES } from "../graphql/query";

const useArticles = () => {
  const { data, loading } = useSubscription(GET_ALL_ARTICLES);
  //   const { data, loading, error } = useQuery(GET_ALL_ARTICLES);
  console.log(data, loading);
};

export default useArticles;
