const Query = {
  me: async (root, args, { dataSources: { authAPI } }, info) => {
    try {
      const me = await authAPI.me();
      return me.data;
    } catch (error) {
      return null;
    }
  },
  protected: async (root, args, { dataSources: { protectedAPI } }, info) => {
    try {
      const protected = await protectedAPI.message();
      return protected;
    } catch (error) {
      return null;
    }
  }
};

module.exports = Query;
