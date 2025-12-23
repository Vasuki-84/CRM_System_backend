const dealsModel = require("../model/deals.model");
const customerModel = require("../model/customer.model");

// POST Api

const createDeals = async (req, res) => {
  try {

    const { customerId, title, description, location, amount, dealStatus } =
      req.body;

    const customer = await customerModel.findOne({
      _id: customerId,
        userId: req.userId,
    });

    if (!customer) {
      return res.status(404).json({
        message: "Customer not found or unauthorized",
      });
    }

    if (!req.userId) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const newDeal = new dealsModel({
      userId:req.userId,
      customerId,
      title,
      description,
      location,
      amount,
      dealStatus,
    });
    await newDeal.save();
    res.status(201).json({ message: "Deal created successfully" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// GET API
const getDeals = async (req, res) => {
  try {
    const deals = await dealsModel.find({ userId: req.userId });
    res.status(200).json(deals);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// PUT API
const updateDeals = async (req, res) => {
  try {
    const updatedDeals = await dealsModel.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json({ message: "Deal updated", updatedDeals });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

// DELETE API
const deleteDeals = async (req, res) => {
  try {
    await dealsModel.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!deleteDeals) {
      return res.status(404).json({ message: "Deal not found" });
    }

    res.status(200).json({ message: "Deal deleted" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

module.exports = { createDeals, getDeals, updateDeals, deleteDeals };
