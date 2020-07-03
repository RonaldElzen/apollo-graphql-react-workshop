import React from "react";

import "./App.css";
import { ApolloProvider } from "@apollo/react-hooks";
import BooksPageContainer from "./pages/booksPage/BooksPageContainer";
import {
  ApolloClient,
  HttpLink,
  NormalizedCacheObject,
  InMemoryCache,
} from "apollo-boost";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MoviesPageContainer from "./pages/moviesPage/MoviesPageContainer";
import FilteredMoviesPageContainer from "./pages/filteredMoviesPage/FilteredMoviesPageContainer";

function App() {
  const cache = new InMemoryCache();
  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link: new HttpLink({
      uri: "http://localhost:4000/graphql",
    }),
  });

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
