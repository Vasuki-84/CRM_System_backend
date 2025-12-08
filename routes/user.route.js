const express = require("express");
const { registerAPI, loginAPI } = require("../controllers/user.controller");
const router = express.Router();


// http://localhost:8081/user/register
router.post("/register", registerAPI);


// http://localhost:8081/user/login
router.post("/login",loginAPI);

module.exports = router;
