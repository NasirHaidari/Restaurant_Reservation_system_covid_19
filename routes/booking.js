const { request } = require("express");
const express = require("express");
const router = express.Router();
const { index, create } = require("../controllers/booking_controller");

router.get("/", index);

router.post("/", create);

module.exports = router;
