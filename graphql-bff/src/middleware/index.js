const { skip } = require("graphql-resolvers");

const isAuthenticated = async (
  root,
  args,
  { dataSources: { authAPI } },
  info
) => {
  try {
    const me = await authAPI.me();
    return skip;
  } catch (error) {
    console.log("ERROR", error);
    throw new Error("Access Denied! Please login to continue");
  }
};

module.exports = {
  isAuthenticated
};
