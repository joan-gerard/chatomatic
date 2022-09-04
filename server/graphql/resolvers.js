const messages = [{id: 1, user: 'joe', message: 'hi'}];


const resolvers = {
  Query: {
    getMessages: () => messages,
  },
};

module.exports = resolvers;
