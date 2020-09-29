const express = require("express");
const router = express.Router();
const { index } = require("../controllers/booking_time_controller");

router.get("/", index);

module.exports = router;
