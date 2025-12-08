const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/dbConnection.config");
const userRoute = require("./routes/user.route");

dbConnection();
app.use(express.json());
app.use("/user",userRoute);
app.listen(process.env.port, () => {
  console.log("Server running on Port", process.env.port);
});
