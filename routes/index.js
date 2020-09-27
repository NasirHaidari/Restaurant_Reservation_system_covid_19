const express = require("express");
const router = express.Router();
const { login } = require("../controllers/admin_controller");

router.use("/booking", require("./booking"));
router.use("/time", require("./time"));
router.use("/admin", [login], require("./admin"));

module.exports = router;
