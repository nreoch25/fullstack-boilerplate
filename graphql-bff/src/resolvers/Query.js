const Query = {
  me: async (root, args, { dataSources: { authAPI } }, info) => {
    try {
      const me = await authAPI.me();
      return me.data;
    } catch (error) {
      return {
        success: false,
        error: error.extensions.response.body.error
      };
    }
  }
};

module.exports = Query;
