const models = require("../models");

const index = async (req, res) => {
    const time = await models.Reservation_time.fetchAll();
    res.send({
        status: "success",
        data: { time },
    });
};

const createNewTime = async (req, res) => {
    const data = req.body;

    try {
        const newTime = await new models.Reservation_time(data).save();

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
    const data = req.body;

    try {
        const updatedTime = await existingTime.save(data);
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
