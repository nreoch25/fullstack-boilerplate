const { withFilter } = require("apollo-server-express");

const Subscription = {
  newMessage: {
    subscribe: withFilter(
      (parent, args, { pubsub }) => {
        return pubsub.asyncIterator("message-added");
      },
      (payload, args) => {
        console.log("PAYLOAD", payload);
        console.log("ARGS", args);
        return payload.user === args.user;
      }
    )
  }
};

module.exports = Subscription;
