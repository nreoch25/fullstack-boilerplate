const Mutation = {
  register: async (
    root,
    { input: { name, email, password } },
    { dataSources: { authAPI } },
    info
  ) => {
    try {
      const registerUser = await authAPI.register(name, email, password);
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
    { dataSources: { authAPI } },
    info
  ) => {
    try {
      const loginUser = await authAPI.login(email, password);
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
