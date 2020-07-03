import { gql } from "apollo-boost";

export const GET_MOVIES = gql`
  query Movies {
    movies {
      title
      price
      genre
      description
    }
  }
`;
