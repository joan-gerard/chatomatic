const typeDefs = `
type Message {
    id: ID!,
    message: String!
    user: String!
}

type Query {
getMessages: [Message!]
}
`;

module.exports = typeDefs;
