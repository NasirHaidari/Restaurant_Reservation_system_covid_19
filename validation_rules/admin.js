const { body } = require("express-validator");
const createTimeValidationsRules = [
    body("clock").isLength({ min: 4 }),
    body("tables").isLength({ min: 1 }),
    body("guests_table").isLength({ min: 1 }),
];

const updateTimeValidationsRules = [
    body("clock").optional().isLength({ min: 4 }),
    body("tables").optional().isLength({ min: 1 }),
    body("guests_table").optional().isLength({ min: 1 }),
];

const updateBookingValidationsRules = [
    body("day").optional().isLength({ min: 3 }),
    body("hour_id").optional().isLength({ min: 1 }),
    body("guests").optional().isLength({ min: 1 }),
    body("name").optional().trim().isLength({ min: 3 }),
    body("phone").optional().trim().isLength({ min: 8 }),
    body("email").optional().trim().isLength({ min: 12 }),
];

module.exports = {
    createTimeValidationsRules,
    updateTimeValidationsRules,
    updateBookingValidationsRules,
};
