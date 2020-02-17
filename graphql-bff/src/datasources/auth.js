const { RESTDataSource } = require("apollo-datasource-rest");

class AuthAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.AUTH_API;
  }
  willSendRequest(request) {
    // console.log("TOKEN", this.context.req.token);
    request.headers.set("Authorization", this.context.req.token);
  }
  async register(name, email, password) {
    const response = await this.post("register", { name, email, password });
    return response;
  }
  async login(email, password) {
    const response = await this.post("login", { email, password });
    return response;
  }
  async me() {
    const response = await this.get("me");
    return response;
  }
  async users() {
    const response = await this.get("users");
    return response;
  }
}

module.exports = AuthAPI;
