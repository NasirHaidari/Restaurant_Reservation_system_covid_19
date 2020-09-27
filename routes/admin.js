const express = require("express");
const router = express.Router();
const { login, update, destroy } = require("../controllers/admin_controller");
const {
    createNewTime,
    updateTime,
} = require("../controllers/booking_time_controller");

router.post("/", createNewTime);

router.put("/:id", update);

router.put("/time/:id", updateTime);

router.delete("/:id", destroy);

module.exports = router;
