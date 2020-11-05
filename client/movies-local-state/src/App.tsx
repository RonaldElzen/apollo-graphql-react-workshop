import React from "react";

import "./App.css";

import BooksPageContainer from "./pages/booksPage/BooksPageContainer";
import {
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MoviesPageContainer from "./pages/moviesPage/MoviesPageContainer";
import FilteredMoviesPageContainer from "./pages/filteredMoviesPage/FilteredMoviesPageContainer";
import { client } from "./graphql/cache";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact={true} path="/" component={BooksPageContainer} />
          <Route path="/movies" component={MoviesPageContainer} />
          <Route
            path="/filteredMovies"
            component={FilteredMoviesPageContainer}
          />
        </div>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
