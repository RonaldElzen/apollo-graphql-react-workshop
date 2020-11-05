import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  makeVar,
  NormalizedCacheObject,
  ReactiveVar,
} from "@apollo/client";
import { Movie } from "../models/Movie";

export const selectedMoviesVar: ReactiveVar<Movie[]> = makeVar<Movie[]>([]);

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        // selectedMovies: {
        //   read(selectedMovies = []) {
        //     return selectedMovies;
        //   },
        // },
        selectedMovies: {
          read() {
            return selectedMoviesVar();
          },
        },
      },
    },
  },
});

export const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: "http://localhost:4000/graphql",
  }),
});
