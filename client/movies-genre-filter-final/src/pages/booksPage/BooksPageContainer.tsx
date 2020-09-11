import React from "react";
import { GET_BOOKS } from "./booksQuery";
import BooksPage from "./BooksPage";
import { useQuery } from "@apollo/client";

function BooksPageContainer() {
  const { data, loading } = useQuery<any>(GET_BOOKS);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  if (data) {
    return <BooksPage books={data.books} />;
  }
  return <></>;
}

export default BooksPageContainer;
