const express = require("express");
const router = express.Router();
const { index, create } = require("../controllers/booking_controller");
const { addCustomerRules } = require("../validation_rules/booking");

router.get("/", index);

router.post("/", addCustomerRules, create);

module.exports = router;
