const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/dbConnection.config");

dbConnection();
app.use(express.json());
app.listen(process.env.port, () => {
  console.log("Server running on Port", process.env.port);
});
