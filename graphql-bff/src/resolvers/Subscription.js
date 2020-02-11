const Subscription = {
  newMessage: {
    subscribe: (parent, args, { pubsub }) => {
      return pubsub.asyncIterator("message-added");
    }
  }
};

module.exports = Subscription;
