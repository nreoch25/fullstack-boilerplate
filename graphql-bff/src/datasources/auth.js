const { RESTDataSource } = require("apollo-datasource-rest");

class AuthAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.AUTH_API;
  }
  async register(name, email, password) {
    const response = await this.post("register", { name, email, password });
    return response;
  }
  async login(email, password) {
    const response = await this.post("login", { email, password });
    return response;
  }
}

module.exports = AuthAPI;
