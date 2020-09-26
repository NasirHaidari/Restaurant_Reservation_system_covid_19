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

module.exports = {
    login,
};
