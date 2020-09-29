const express = require("express");
const router = express.Router();
const { login } = require("../controllers/admin_controller");
const { validateToken } = require("../controllers/middlewares/auth");

router.post("/login", login);

router.use("/booking", require("./booking"));
router.use("/time", require("./time"));
router.use("/admin", [validateToken], require("./admin"));

module.exports = router;
