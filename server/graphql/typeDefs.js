const typeDefs = `
    type Message {
        id: ID!,
        body: String!
        user: String!
    }

    type Query {
        getMessages: [Message!]
    }

    type Mutation {
        postMessage(user: String!, body: String!): Message
    }
`;

module.exports = typeDefs;
