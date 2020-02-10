const { RESTDataSource } = require("apollo-datasource-rest");

class MessageAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.MESSAGE_API;
  }
  async allMessages() {
    const response = await this.get("all");
    return response;
  }
  async createMessage(sender, receiver, text) {
    const response = await this.post("create", { sender, receiver, text });
    return response;
  }
}

module.exports = MessageAPI;
