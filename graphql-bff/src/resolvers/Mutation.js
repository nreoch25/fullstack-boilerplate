const { combineResolvers } = require("graphql-resolvers");
const { isAuthenticated } = require("../middleware");

const Mutation = {
  register: async (
    root,
    { input: { name, email, password } },
    { dataSources: { authAPI }, res },
    info
  ) => {
    try {
      const registerUser = await authAPI.register(name, email, password);

      res.cookie("fsb-token", registerUser.token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day cookie
      });
      return registerUser;
    } catch (error) {
      console.log("ERROR", error);
      return {
        success: false,
        error: error.extensions.response.body.error
      };
    }
  },
  login: async (
    root,
    { input: { email, password } },
    { dataSources: { authAPI }, res },
    info
  ) => {
    try {
      const loginUser = await authAPI.login(email, password);
      res.cookie("fsb-token", loginUser.token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 // 1 day cookie
      });
      return loginUser;
    } catch (error) {
      return {
        success: false,
        error: error.extensions.response.body.error
      };
    }
  },
  logout: (root, args, { res }, info) => {
    res.clearCookie("fsb-token");
    return {
      message: "User logged out successfully"
    };
  },
  createMessage: combineResolvers(
    isAuthenticated,
    async (
      root,
      { input: { sender, receiver, text } },
      { dataSources: { messageAPI } },
      info
    ) => {
      try {
        const { message } = await messageAPI.createMessage(
          sender,
          receiver,
          text
        );
        console.log("MESSAGE", message);
        return message;
      } catch (error) {
        console.log("ERROR", error);
        return null;
      }
    }
  )
};

module.exports = Mutation;
