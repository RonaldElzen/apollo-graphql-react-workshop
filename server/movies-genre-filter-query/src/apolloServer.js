const { ApolloServer } = require("apollo-server-express");

const { typeDefs } = require("./schema/schema.js");
const { resolvers } = require("./resolvers");
const { dataSources } = require("./dataSources/index.js");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
});
module.exports = {
  apolloServer,
};
