import React from "react";
import { GET_BOOKS } from "./booksQuery";
import { useQuery } from "@apollo/client";
import BooksPage from "./BooksPage";

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
