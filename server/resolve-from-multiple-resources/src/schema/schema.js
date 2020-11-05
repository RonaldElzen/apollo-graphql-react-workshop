//types
const { Book } = require("./types/book.js");
const { Movie } = require("./types/movie");
const { Item } = require("./types/item");
const { Query } = require("./query.js");

const typeDefs = [Query, Book, Movie, Item];

module.exports = {
  typeDefs,
};
