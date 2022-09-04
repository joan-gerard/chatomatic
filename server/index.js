const { createServer } = require("@graphql-yoga/node");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");


const server = new createServer({
  schema: {
    typeDefs,
    resolvers,
  },
});

server.start(({ port }) => {
  console.log(`Server on localhost/${port}`);
});

// server.start()
