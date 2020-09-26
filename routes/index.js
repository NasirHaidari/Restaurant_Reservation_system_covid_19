const express = require("express");
const { route } = require("./booking");
const router = express.Router();

router.use("/booking", require("./booking"));
router.use("/admin", require("./admin"));

module.exports = router;
