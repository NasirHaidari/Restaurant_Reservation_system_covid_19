const express = require("express");
const router = express.Router();
const { index, update, destroy } = require("../controllers/admin_controller");
const {
    createNewTime,
    updateTime,
} = require("../controllers/booking_time_controller");

const {
    updateBookingValidationsRules,
    createTimeValidationsRules,
    updateTimeValidationsRules,
} = require("../validation_rules/admin");

router.get("/", index);

router.post("/", createTimeValidationsRules, createNewTime);

router.put("/:id", updateBookingValidationsRules, update);

router.put("/time/:id", updateTimeValidationsRules, updateTime);

router.delete("/:id", destroy);

// router.get("/booked", index);

module.exports = router;
