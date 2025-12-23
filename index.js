const express = require("express");
const app = express();
require("dotenv").config();
const dbConnection = require("./config/dbConnection.config");
const userRoute = require("./routes/user.route");
const customerRoute = require("./routes/customer.route");
const dealRoute = require("./routes/deals.route");
const CORS = require("cors");

dbConnection();
app.use(express.json());
app.use(CORS());
app.use("/user", userRoute);
app.use("/customer", customerRoute);
app.use("/deals", dealRoute);
app.listen(process.env.port, () => {
  console.log("Server running on Port", process.env.port);
});
