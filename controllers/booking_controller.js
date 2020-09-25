const { getAll, store } = require("../models/index");

const index = (req, res) => {
    getAll().then((data) => {
        res.send({
            status: "success",
            data,
        });
    });
};

const create = (req, res) => {
    console.log("would you like to store a new coffee", req.body);
    store(req.body).then(
        res.send({
            status: "success",
        })
    );
};

module.exports = {
    index,
    create,
};
