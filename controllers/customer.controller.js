const Customer = require("../model/customer.model");

const customerRegister = async (req, res) => {
  try {
    
    const userId = req.userId;

    const { customerName, customerNumber, deal, location } = req.body;

    if (!customerName || !customerNumber || !deal || !location) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized: User not authenticated",
      });
    }

    const newCustomer = await Customer.create({
      customerName,
      customerNumber,
      deal,
      location,
      userId,
    });

    return res.status(201).json({
      message: "Customer created successfully",
      customer: newCustomer,
    });
  } catch (error) {
    console.error("Create Customer error:", error.message);

    return res.status(500).json({
      message: "Customer creation failed",
      error: error.message,
    });
  }
};

module.exports = {
  customerRegister,
};
