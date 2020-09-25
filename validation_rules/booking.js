const { body } = require("express-validator");

const addCustomerRules = [
    body("day").isLength({ min: 3 }),
    body("hour_id").isLength({ min: 1 }),
    body("guests").isLength({ min: 1 }),
    body("name").trim().isLength({ min: 3 }),
    body("phone").trim().isLength({ min: 8 }),
    body("email").trim().isLength({ min: 12 }),
];

module.exports = {
    addCustomerRules,
};
