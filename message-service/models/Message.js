const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  text: { type: String, required: true },
  sender: { ref: "User", type: Schema.Types.ObjectId },
  receiver: { ref: "User", type: Schema.Types.ObjectId },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Message", MessageSchema);
