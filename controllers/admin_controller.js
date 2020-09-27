const models = require("../models");

const login = async (req, res, next) => {
    const data = req.body;
    if (!req.headers.authorization) {
        res.status(401).send({
            status: "fail",
            data: "Authorization required",
        });
        return;
    }

    const [authSchema, base64Payload] = req.headers.authorization.split(" ");

    if (authSchema.toLowerCase() !== "basic") {
        next();
    }

    const decodedPayload = Buffer.from(base64Payload, "base64").toString(
        "ascii"
    );

    const [username, password] = decodedPayload.split(":");

    const admin = await new models.Admin({ username: username }).fetch({
        require: false,
    });

    if (!admin) {
        res.send({
            status: "fail",
            message: "This username isn't exist",
        });
        return;
    }

    if (admin && admin.get("password") !== password) {
        res.send({
            status: "fail",
            message: "Password isn't correct ",
        });
        return;
    }

    next();
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
