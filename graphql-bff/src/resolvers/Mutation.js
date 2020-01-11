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
  }
};

module.exports = Mutation;
