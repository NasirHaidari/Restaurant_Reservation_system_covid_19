const express = require("express");
const router = express.Router();
const { create } = require("../controllers/booking_controller");
const { addCustomerRules } = require("../validation_rules/booking");

router.post("/", addCustomerRules, create);

module.exports = router;
