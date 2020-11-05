import { gql } from "@apollo/client";

export const GET_MOVIES_BY_GENRE = gql`
  query moviesByGenre($genre: String!) {
    moviesByGenre(genre: $genre) {
      title
      price
      genre
      description
    }
  }
`;
