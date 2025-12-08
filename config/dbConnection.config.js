const mongoose = require("mongoose");

// Mongo DB Atlas connection
const connectAtlas = async () => {
  try {
    await mongoose.connect(process.env.dbPort, {
      ssl: true,
      tlsAllowInvalidCertificates: false,
    });
    console.log("Mongo DB Atlas connected successfully...");
  } catch (err) {
    console.log("Mongo DB Atlas connection failed!");
  }
};
module.exports = connectAtlas;
