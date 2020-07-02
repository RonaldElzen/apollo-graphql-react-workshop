//types
const { Book } = require("./types/book.js");
const { Movie } = require("./types/movie");
const { Query } = require("./query.js");

const typeDefs = [Query, Book, Movie];

module.exports = {
  typeDefs,
};
