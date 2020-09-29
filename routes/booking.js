const express = require("express");
const router = express.Router();
const { makeCountCheck, create } = require("../controllers/booking_controller");
const { addCustomerRules } = require("../validation_rules/booking");

router.post("/", addCustomerRules, create);

router.post("/check", makeCountCheck);

module.exports = router;
