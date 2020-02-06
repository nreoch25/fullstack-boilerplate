const asyncHandler = require("../middleware/async");
const Message = require("../models/Message");

// @desc      Get all messages
// @route     GET /api/v1/message
// @access    Private
const allMessages = asyncHandler(async (req, res, next) => {
  const messages = await Message.find({});
  res.json({ messages });
});

module.exports = {
  allMessages
};
