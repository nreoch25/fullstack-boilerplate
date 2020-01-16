const express = require("express");
const { protected } = require("../controllers/protected");

const router = express.Router();
router.get("/message", protected);

module.exports = router;
