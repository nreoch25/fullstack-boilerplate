const Query = {
  me: async (root, args, { dataSources: { authAPI } }, info) => {
    try {
      const me = await authAPI.me();
      return me.data;
    } catch (error) {
      return null;
    }
  }
};

module.exports = Query;
