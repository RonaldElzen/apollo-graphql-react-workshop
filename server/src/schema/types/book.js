const { gql } = require("apollo-server-express");

const Book = gql`
  type Book {
    title: String
    author: String
  }
`;

module.exports = {
  Book,
};
