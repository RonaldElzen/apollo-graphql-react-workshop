const { gql } = require("apollo-server-express");

const Item = gql`
  type Item {
    id: Float
    title: String
    description: String
  }
`;

module.exports = {
  Item,
};
