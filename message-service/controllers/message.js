const asyncHandler = require("../middleware/async");
const Message = require("../models/Message");

// @desc      Get all messages
// @route     GET /api/v1/message
// @access    Private
const allMessages = asyncHandler(async (req, res, next) => {
  const { user } = req.query;
  const messages = await Message.find({
    $or: [{ sender: user }, { receiver: user }]
  });
  res.json({ messages });
});

// @desc      Create new message
// @route     POST /api/v1/message
// @access    Private
const createMessage = asyncHandler(async (req, res, next) => {
  const { sender, receiver, text } = req.body;
  const newMessage = new Message({
    sender,
    receiver,
    text
  });
  const message = await newMessage.save();
  res.json({ message });
});

module.exports = {
  allMessages,
  createMessage
};
