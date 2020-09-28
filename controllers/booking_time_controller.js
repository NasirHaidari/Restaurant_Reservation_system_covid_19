const models = require("../models");
const { matchedData, validationResult } = require("express-validator");

const index = async (req, res) => {
    const time = await models.Reservation_time.fetchAll();
    res.send({
        status: "success",
        data: { time },
    });
};

const createNewTime = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Create a new time failed validation:", errors.array());
        res.status(422).send({
            status: "fail",
            data: errors.array(),
        });
        return;
    }

    const validData = matchedData(req);

    try {
        const newTime = await new models.Reservation_time(validData).save();

        res.send({
            status: "success",
            data: { newTime },
        });
    } catch (err) {
        res.status(500).send({
            status: "error",
            message: "Exception thrown in database when adding new time.",
        });
        throw err;
    }
};

const updateTime = async (req, res) => {
    const timeId = req.params.id;
    const existingTime = await new models.Reservation_time({
        id: timeId,
    }).fetch({ require: false });

    if (!existingTime) {
        res.send({
            status: "fail",
            message: "this time is not existing",
        });
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Create a new time failed validation:", errors.array());
        res.status(422).send({
            status: "fail",
            data: errors.array(),
        });
        return;
    }

    const validData = matchedData(req);

    try {
        const updatedTime = await existingTime.save(validData);
        res.send({
            status: "success",
            data: {
                updatedTime,
            },
        });
    } catch (err) {
        res.status(500).send({
            status: "error",
            message: "Exception thrown in database when updating time.",
        });
        throw err;
    }
};

module.exports = {
    index,
    createNewTime,
    updateTime,
};
