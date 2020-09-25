const { request } = require("express");

const models = require("../models");

const index = async (req, res) => {
    const data = await models.Reservation.fetchAll();
    res.send({
        status: "success",
        data,
    });
};

const create = async (req, res) => {
    console.log("would you like to store a new coffee", req.body);

    const booking = await new models.Reservation(req.body).save();
    console.log("Created new booking successfully:", booking);

    res.send({
        status: "success",
    });
};

module.exports = {
    index,
    create,
};
