import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import useFetchNews from "./../../hooks/useFetchNews";
import "./NewsPagination.css";

const NewsPagination = () => {
  const [{ news }, setQueries] = useFetchNews();
  const [pageCount, setPageCount] = useState(0);
  const { totalResults, queries } = news;
  const { pageSize, page } = queries;

  const onPageChange = (e) => {
    setQueries({ ...queries, page: e.selected + 1 });
  };

  useEffect(() => {
    setPageCount(Math.ceil(totalResults / pageSize));
  }, [pageSize, totalResults]);

  return (
    <div className="paginationNews">
      {pageCount > 0 && (
        <ReactPaginate
          forcePage={page - 1}
          initialPage={page - 1}
          pageCount={pageCount}
          onPageChange={onPageChange}
          previousLabel="<"
          nextLabel=">"
          containerClassName="pagination p1"
          pageClassName=""
          activeClassName="is-active"
          activeLinkClassName="is-active"
        />
      )}
    </div>
  );
};

export default NewsPagination;
