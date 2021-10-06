import axios from "axios";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setError, setLoading, updateNews } from "../store/newsSlice";
require("dotenv").config();

const useFetchNews = () => {
  const { news } = useSelector((state) => state);
  const { queries: oldQueries, loading, error } = news;
  const { country: oldCountry, category: oldCategory, q: oldQ, page: oldPage, pageSize: oldPageSize } = oldQueries;
  const dispatch = useDispatch();

  const setQueries = useCallback(
    async (newQueries) => {
      dispatch(setLoading(true));
      dispatch(setError(false));
      try {
        const { country = oldCountry, category = oldCategory, q = oldQ, page = oldPage } = newQueries;
        let { pageSize = oldPageSize } = newQueries;
        pageSize = parseInt(pageSize);
        const result = await axios(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&q=${q}&pageSize=${pageSize}&page=${page}`, {
          headers: {
            "X-Api-Key": "ab99f78a49634710b612960297c3f6a5",
          },
        });
        const { articles, totalResults } = result.data;

        dispatch(updateNews({ articles, queries: { country, category, q, page, pageSize }, totalResults }));
        dispatch(setLoading(false));
        dispatch(setError(false));
      } catch (error) {
        dispatch(setError(true));
        console.error(error);
      } finally {
        dispatch(setLoading(false));
      }
    },
    [dispatch, oldCategory, oldCountry, oldPage, oldPageSize, oldQ]
  );

  return [{ news, loading, error }, setQueries];
};

export default useFetchNews;
