const mongoose = require("mongoose");

const dealsSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customers",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },
  dealStatus: {
    type: Boolean,
    required: true,
  },
});

const Deals = new mongoose.model("Deals", dealsSchema);
module.exports = Deals;
