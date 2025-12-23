const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/userAuthMiddleware");
const { customerRegister } = require("../controllers/customer.controller");

router.post("/create", authMiddleware, customerRegister);

module.exports = router;
