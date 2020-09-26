const express = require("express");
const router = express.Router();
const { login, update, destroy } = require("../controllers/admin_controller");

router.post("/login", login);

router.put("/:id", update);

router.delete("/:id", destroy);

module.exports = router;
