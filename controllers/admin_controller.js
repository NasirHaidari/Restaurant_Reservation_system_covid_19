const models = require("../models");

const login = async (req, res, next) => {
    const data = req.body;

    const admin = await new models.Admin({ username: data.username }).fetch({
        require: false,
    });

    if (!admin) {
        res.send({
            status: "fail",
            message: "This username isn't exist",
        });
        return;
    }

    console.log(admin.get("password"));

    if (admin && admin.get("password") !== data.password) {
        res.send({
            status: "fail",
            message: "Password isn't correct ",
        });
        return;
    }

    res.send({
        status: "success",
    });
};

const update = async (req, res) => {
    const bookingId = req.params.id;
    const data = req.body;

    const booking = await new models.Reservation({ id: bookingId }).fetch({
        require: false,
    });

    if (!booking) {
        res.send({
            status: "fail",
            message: "Booking Not Found",
        });
        return;
    }

    try {
        const updatedBooking = await booking.save(data);
        res.send({
            status: "success",
            data: {
                updatedBooking,
            },
        });
    } catch (err) {
        res.status(500).send({
            status: "error",
            message: "Exception thrown in database when updating booking.",
        });
        throw err;
    }
};

const destroy = async (req, res) => {
    const bookingId = req.params.id;

    try {
        await new models.Reservation({ id: bookingId }).destroy();
        res.send({
            status: " success",
        });
    } catch (err) {
        res.send({
            status: "fail",
            message: `couldn't delete booking with id ${bookingId}`,
        });
    }
};

module.exports = {
    login,
    update,
    destroy,
};
