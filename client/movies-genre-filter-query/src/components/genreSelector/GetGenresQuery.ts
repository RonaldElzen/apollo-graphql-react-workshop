import { gql } from "apollo-boost";

export const GET_GENRES = gql`
  query MovieGenres {
    movieGenres
  }
`;
