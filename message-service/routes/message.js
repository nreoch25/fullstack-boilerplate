const express = require("express");
const { allMessages } = require("../controllers/message");

const router = express.Router();
router.get("/", allMessages);

module.exports = router;
