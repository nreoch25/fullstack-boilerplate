const { combineResolvers } = require("graphql-resolvers");
const { isAuthenticated } = require("../middleware");

const Query = {
  me: async (root, args, { dataSources: { authAPI } }, info) => {
    try {
      const me = await authAPI.me();
      return me.data;
    } catch (error) {
      return null;
    }
  },
  users: combineResolvers(
    isAuthenticated,
    async (root, args, { dataSources: { authAPI } }, info) => {
      try {
        const users = await authAPI.users();
        return users.data;
      } catch (error) {
        return null;
      }
    }
  ),
  protected: combineResolvers(
    isAuthenticated,
    async (root, args, { dataSources: { protectedAPI } }, info) => {
      try {
        const protected = await protectedAPI.message();
        return protected;
      } catch (error) {
        return null;
      }
    }
  ),
  messages: combineResolvers(
    isAuthenticated,
    async (root, args, { dataSources: { messageAPI } }, info) => {
      try {
        const { messages } = await messageAPI.allMessages();
        console.log("MESSAGES", messages);
        return messages;
      } catch (error) {
        return null;
      }
    }
  )
};

module.exports = Query;
