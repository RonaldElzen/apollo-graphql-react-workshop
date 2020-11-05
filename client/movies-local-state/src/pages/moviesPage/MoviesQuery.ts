import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query Movies {
    movies {
      title
      price
      genre
      description
      id
    }
  }
`;

export const GET_SELECTED_MOVIES = gql`
  query Movies {
    selectedMovies @client {
      title
      price
      id
      genre
      description
    }
  }
`;
