const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref:"User"
  },
  customerNumber: {
    type: String,
    required: true,
  },
  deal: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

const newCustomer = new mongoose.model("Customers", customerSchema);

module.exports = newCustomer;
