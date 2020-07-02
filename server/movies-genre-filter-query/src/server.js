const express = require("express");
const { apolloServer } = require("./apolloServer.js");

const app = express();
apolloServer.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000/graphql}`);
});
