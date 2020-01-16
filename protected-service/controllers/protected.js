const asyncHandler = require("../middleware/async");

// @desc      Register user
// @route     POST /api/v1/auth/register
// @access    Public
const protected = asyncHandler(async (req, res, next) => {
  res.json({ message: "You are allowed to access this resource" });
});

module.exports = {
  protected
};
