const express = require("express");
const router = express.Router();

const customerStore = require("../data/customerStore");

// Insert customer

router.post("/", async (req, res) => {
  try {
    const { name, account } = req.body;

    if (typeof name !== "string" || typeof account !== "string" || !name.trim() || !account.trim()) {
      return res.status(400).json({
        error: "Name and account are required.",
      });
    }

    const customer = await customerStore.addCustomer({ name, account });

    res.status(201).json(customer);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// Get all customers

router.get("/", async (req, res) => {
  try {
    const customers = await customerStore.getCustomers();

    res.json(customers);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
