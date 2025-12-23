const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const userAuthMiddleware = require("../middleware/userAuthMiddleware");

const {
  createDeals,
  getDeals,
  updateDeals,
  deleteDeals,
} = require("../controllers/deals.controller");

// http://localhost:8081/deals/createDeal
router.post("/createDeal",userAuthMiddleware, authMiddleware(["admin"]), createDeals);

// http://localhost:8081/deals
router.get("/", getDeals);

// http://localhost:8081/deals/<id>
router.put("/update/:id", authMiddleware(["admin"]), updateDeals);

// http://localhost:8081/deals/<id>
router.delete("/:id", authMiddleware(["admin"]), deleteDeals);

module.exports = router;
