const express = require("express");
const { allMessages, createMessage } = require("../controllers/message");

const router = express.Router();
router.get("/all", allMessages);
router.post("/create", createMessage);

module.exports = router;
