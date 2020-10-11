const models = require("../models");
const jwt = require("jsonwebtoken");
const { matchedData, validationResult } = require("express-validator");

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

  if (admin && admin.get("password") !== data.password) {
    res.send({
      status: "fail",
      message: "Password isn't correct ",
    });
    return;
  }

  const payload = {
    data: {
      id: admin.get("id"),
      username: admin.get("username"),
    },
  };

  const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: process.env.ACCESS_TOKEN_LIFETIME || "1h",
  });

  res.send({
    status: "success",
    token: {
      access_token,
    },
  });
};

const index = async (req, res) => {
  const data = await models.Reservation.fetchAll();
  res.send({
    status: "success",
    data,
  });
};

const update = async (req, res) => {
  const bookingId = req.params.id;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log("update a time failed validation:", errors.array());
    res.status(422).send({
      status: "fail",
      data: errors.array(),
    });
    return;
  }

  const validData = matchedData(req);

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
    const updatedBooking = await booking.save(validData);
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
  index,
  update,
  destroy,
};
