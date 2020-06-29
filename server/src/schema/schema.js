//types
const { Book } = require("./types/book.js");
const { Query } = require("./query.js");

const typeDefs = [Query, Book];

module.exports = {
  typeDefs,
};
