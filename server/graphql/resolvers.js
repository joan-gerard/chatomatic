const messages = [{ id: 1, user: "joe", body: "hi" }];

const resolvers = {
  Query: {
    getMessages: () => messages,
  },
  Mutation: {
    postMessage: (_, { user, body }) => {
      const id = messages.length + 1;

      const newMessage = {
        id,
        user,
        body,
      }
      messages.push(newMessage);
      return newMessage
    },
  },
};

module.exports = resolvers;
