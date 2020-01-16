const { RESTDataSource } = require("apollo-datasource-rest");

class ProtectedAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.PROTECTED_API;
  }
  async message() {
    const response = await this.get("message");
    return response;
  }
}

module.exports = ProtectedAPI;
