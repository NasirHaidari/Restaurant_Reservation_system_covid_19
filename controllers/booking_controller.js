const models = require("../models");
const { matchedData, validationResult } = require("express-validator");

const create = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("Make a reservation failed validation:", errors.array());
        res.status(422).send({
            status: "fail",
            data: errors.array(),
        });
        return;
    }

    const validData = matchedData(req);

    const bookingCount = await new models.Reservation()
        .where({
            hour_id: validData.hour_id,
            day: validData.day,
        })
        .count();

    console.log(bookingCount);

    const booking_time = await new models.Reservation_time({
        id: validData.hour_id,
    }).fetch({
        require: false,
    });

    const tablesCount = Number(booking_time.get("tables"));
    const guests_table = Number(booking_time.get("guests_table"));

    if (bookingCount === tablesCount) {
        res.send({
            status: "fail",
            message: "There is no available place, try another time or day",
        });
        return;
    }

    if (Number(validData.guests) > guests_table) {
        res.send({
            status: "fail",
            message: `our tables available just for ${guests_table} persons`,
        });
        return;
    }

    try {
        const booking = await new models.Reservation(validData).save();
        console.log("Created new booking successfully:", booking);

        res.send({
            status: "success",
        });
    } catch (err) {
        res.status(500).send({
            status: "error",
            message: "Exception thrown in database when making a reservation.",
        });
        throw error;
    }
};

module.exports = {
    create,
};
