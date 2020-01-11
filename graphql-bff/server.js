const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const expressPlayground = require("graphql-playground-middleware-express")
  .default;
const { readFileSync } = require("fs");
const { createServer } = require("http");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
dotenv.config();
const AuthAPI = require("./src/datasources/auth");

const typeDefs = gql(
  readFileSync("./src/schema.graphql", { encoding: "utf-8" })
);
const resolvers = require("./src/resolvers");

const app = express();
const port = process.env.PORT || 8000;

// Cookie Parser
app.use(cookieParser());

// Middleware to extract authorization token
app.use((req, res, next) => {
  // Check Authorization header first
  const { authorization } = req.headers;
  if (authorization) {
    req.token = authorization;
  } else {
    // Check Cookie if no Authorization header is found
    const { "fsb-token": fsbToken } = req.cookies;
    if (fsbToken) {
      req.token = `Bearer ${fsbToken}`;
    }
  }
  next();
});

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    authAPI: new AuthAPI()
  }),
  context: ({ req, res }) => {
    return {
      req,
      res
    };
  }
});

apolloServer.applyMiddleware({
  app,
  path: "/graphql",
  cors: { origin: `${process.env.CLIENT_URI}`, credentials: true }
});

app.get(
  "/playground",
  expressPlayground({
    endpoint: "/graphql"
  })
);

const PORT = process.env.PORT || 8000;

const httpServer = createServer(app);

httpServer.listen(port, () => {
  console.log(`Server listening on PORT ${PORT}`);
  console.log(`GraphQL Endpoint: ${apolloServer.graphqlPath}`);
});
